import React, { Component } from "react";
import Card from "./Card";

class CardCarousel extends Component {
  render() {
    return (
      <div className="container-fluid py-2">
        <h2 class="font-weight-light">Menu App</h2>
        <div className="d-flex flex-row flex-nowrap">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default CardCarousel;
