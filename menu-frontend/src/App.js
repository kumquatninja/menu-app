import React, { Component } from "react";
import "./App.css";
import CardCarousel from "./components/cardcarousel";
import Footer from "./components/stickyfooter";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    day: "day_0",
    meal: "breakfast",
    menu: [],
    userPosition: [42.721202, -84.489528] // Default user position is holden hall
  };

  getLocation = () => {
    if (navigator.geolocation) {
      let location = navigator.geolocation.getCurrentPosition(
        this.setUserPosition
      );
      console.log("User location", location);
    }
  };

  setUserPosition = position => {
    console.log(
      "Latitidue",
      position.coords.latitude,
      "Longitude",
      position.coords.longitude
    );
    this.setState({ userPosition: position });
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
  }

  componentDidMount() {
    fetch("http://menu-app-msu.appspot.com/menus")
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(JSON.parse(data[this.state.day]));
      });
    this.getLocation();
  }

  render() {
    console.log(this.state.menu);
    return (
      <React.Fragment>
        <NavBar meal={this.state.meal} />
        <CardCarousel
          value={this.getMeal()}
          menu={this.state.menu}
          meal={this.getMeal()}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
