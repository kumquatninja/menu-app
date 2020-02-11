import React, { Component } from "react";
import "./App.css";
import CardCarousel from "./components/cardcarousel";
import Footer from "./components/stickyfooter";
import NavBar from "./components/navbar";

class App extends Component {
  state = { day: "day_0", meal: "breakfast", menu: [] };

  getMeal = () => {
    let hour = new Date().getHours();
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

  componentDidMount() {
    fetch("http://menu-app-msu.appspot.com/menus")
      .then(response => {
        return response.json();
      })
      .then(data => {
        let meal = this.state.meal;
        let day = this.state.day;

        this.setState({
          menu: data
        });
        //console.log(this.state.menu);
      });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <CardCarousel
          value={this.getMeal()}
          day={this.state.day}
          menu={this.state.menu}
          meal={this.getMeal()}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
