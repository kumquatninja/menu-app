import React, { Component } from "react";
import Card from "./card";
import "../custom.css";

class CardCarousel extends Component {
  state = {
    halls: [
      { id: "AKERS", items: [] },
      { id: "SNYDER_PHILLIPS", items: [] },
      { id: "CASE", items: [] },
      { id: "BRODY", items: [] },
      { id: "SHAW", items: [] },
      { id: "OWEN", items: [] },
      { id: "LANDON", items: [] },
      { id: "HOLDEN", items: [] },
      { id: "WILSON", items: [] },
      { id: "HOLMES", itmes: [] }
    ]
  };

  render() {
    console.log(this.props);
    return (
      <div className="container-fluid py-2">
        <div className="d-flex justify-content-center flex-row flex-wrap centered">
          {this.state.halls.map(hall => (
            <Card
              key={hall.id}
              id={hall.id}
              value={this.props.meal}
              items={this.props.menu}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default CardCarousel;
