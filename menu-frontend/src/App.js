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

  getLocation = () => {
    if (navigator.geolocation) {
      const location = navigator.geolocation.getCurrentPosition(
        this.setUserPosition
      );
    } else {
      console.log("Could not retrieve location info");
    }
  };

  setUserPosition = position => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    console.log("Latitidue", lat, "Longitude", long);
    this.setState({
      userPosition: [lat, long]
    });
    console.log("UWHIUAHWIDH", this.state.userPosition);
  };

  getMeal = () => {
    const hour = new Date().getHours();
    let meal;
    if (hour <= 10) {
      meal = "breakfast";
    } else if (hour <= 14) {
      meal = "lunch";
    } else {
      meal = "dinner";
    }
    return meal;
  };

  constructor() {
    super();
    this.state.meal = this.getMeal();
    //this.getLocation();
  }

  componentDidMount() {
    fetch("http://menu-app-msu.appspot.com/menus")
      .then(response => {
        return response.json();
      })
      .then(data => {
        //console.log(JSON.parse(data[this.state.day]));
      });
    this.getLocation();
  }

  render() {
    //console.log(this.state.menu);
    console.log("RENDER");
    return (
      <React.Fragment>
        <NavBar meal={this.state.meal} />
        <CardCarousel
          value={this.getMeal()}
          menu={this.state.menu}
          meal={this.getMeal()}
          position={this.state.userPosition}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
