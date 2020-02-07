import React, { Component } from "react";
import Card from "./Card";
import "../custom.css";

class CardCarousel extends Component {
  state = {
    halls: [
      { id: "AKERS", items: 0 },
      { id: "CASE", items: 0 },
      { id: "BRODY", items: 0 },
      { id: "SHAW", items: 0 }
    ]
  };

  render() {
    return (
      <div className="container-fluid py-2">
        <div className="d-flex flex-row flex-nowrap">
          {this.state.halls.map(hall => (
            <Card key={hall.id} id={hall.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default CardCarousel;
