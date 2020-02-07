import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardCarousel from "./components/CardCarousel";

class App extends Component {
  state = { meal: "breakfast" };

  componentDidMount() {
    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    let hour = new Date().getHours();
    let meal;

    if (hour <= 10) {
      meal = "breakfast";
    } else if (hour <= 14) {
      meal = "lunch";
    }

    console.log("Meal:", meal);

    this.setState({ meal: meal });
  }

  render() {
    return (
      <header>
        <h2 className="font-weight-light">Menu App</h2>
        <h4 className="font-weight-light">{this.state.meal}</h4>
        <CardCarousel value={this.state.meal} />
      </header>
    );
  }
}

export default App;
