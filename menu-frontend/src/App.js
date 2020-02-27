import React, { Component } from "react";
import "./App.css";
import CardCarousel from "./components/cardcarousel";
import Footer from "./components/stickyfooter";
import NavBar from "./components/navbar";
import { unstable_batchedUpdates } from "react-dom";

class App extends Component {
  state = {
    day: "day_0",
    meal: "breakfast",
    menu: [],
    userPosition: [42.721202, -84.489528] // Default user position is holden hall
  };

  /**
   * Request and retrieve user location data
   */
  getLocation = () => {
    if (navigator.geolocation) {
      const location = navigator.geolocation.getCurrentPosition(
        this.setUserPosition
      );
    } else {
      console.log("Could not retrieve location info");
    }
  };

  /**
   * Helper function for getLocation. Sets userPosition state in lat, long.
   */
  setUserPosition = position => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    //console.log("Latitidue", lat, "Longitude", long);
    this.setState({
      userPosition: [lat, long]
    });
    // Updates card order based on location
    this.refs.cardcarousel.updateDistances();
    this.refs.cardcarousel.sortbyDistance();
  };

  changeMeal = newMeal => {
    this.setState({ meal: newMeal });
    //console.log(this.state.meal);
  };

  /**
   * Returns meal from time of day
   */
  getMeal = () => {
    const hour = new Date().getHours();
    let meal;
    if (hour <= 11) {
      meal = "breakfast";
    } else if (hour <= 14) {
      meal = "lunch";
    } else {
      meal = "dinner";
    }
    //console.log(hour);
    return meal;
  };

  constructor() {
    super();
    this.state.meal = this.getMeal();
    //this.getLocation();
  }

  componentDidMount() {
    fetch("https://menu-app-msu.appspot.com/menus")
      .then(response => {
        return response.json();
      })
      .then(data => {
        let menus = JSON.parse(data[this.state.day]);
        this.setState({ menus });
        //console.log(this.state.menus);
      });
    this.getLocation();
  }

  render() {
    //console.log(this.state.menus);
    return (
      <React.Fragment>
        <NavBar meal={this.state.meal} changeMeal={this.changeMeal} />
        <CardCarousel
          ref="cardcarousel"
          menus={this.state.menus}
          meal={this.state.meal}
          position={this.state.userPosition}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
