import React, { Component } from "react";
import Card from "./Card";
import "../custom.css";

class CardCarousel extends Component {
  state = {
    meal: this.props.value,
    halls: [
      { id: "AKERS", items: 0 },
      { id: "SNYDER_PHILLIPS", items: 0 },
      { id: "CASE", items: 0 },
      { id: "BRODY", items: 0 },
      { id: "SHAW", items: 0 },
      { id: "OWEN", items: 0 },
      { id: "LANDON", items: 0 },
      { id: "HOLDEN", items: 0 },
      { id: "WILSON", items: 0 },
      { id: "HOLMES", itmes: 0 }
    ]
  };

  render() {
    return (
      <div className="container-fluid py-2">
        <div className="d-flex flex-row flex-nowrap">
          {this.state.halls.map(hall => (
            <Card key={hall.id} id={hall.id} value={this.state.meal} />
          ))}
        </div>
      </div>
    );
  }
}

export default CardCarousel;
