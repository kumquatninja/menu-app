import React, { Component } from "react";
import Card from "./Card";

class CardCarousel extends Component {
  state = {
    halls: [
      { id: "AKERS", items: 0 },
      { id: "CASE", items: 0 },
      { id: "BRODY", items: 0 }
    ]
  };
  render() {
    return (
      <div className="container-fluid py-2">
        <h2 class="font-weight-light">Menu App</h2>
        <div className="d-flex flex-row flex-nowrap">
          {this.state.halls.map(hall => (
            <Card id={hall.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default CardCarousel;
