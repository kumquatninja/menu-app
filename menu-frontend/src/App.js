import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardCarousel from "./components/CardCarousel";

class App extends Component {
  ShowCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    return month + "-" + date + "-" + year;
  };
  render() {
    return (
      <header>
        <h2 className="font-weight-light">Menu App</h2>
        <h4 className="font-weight-light">{this.ShowCurrentDate()}</h4>
        <CardCarousel />
      </header>
    );
  }
}

export default App;
