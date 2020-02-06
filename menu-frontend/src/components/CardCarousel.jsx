import React, { Component } from "react";
import Card from "./Card";
import "../custom.css";

class CardCarousel extends Component {
  state = {
    halls: [
      { id: "AKERS", items: 0 },
      { id: "CASE", items: 0 },
      { id: "BRODY", items: 0 },
      { id: "SHAW", items: 0 },
      { id: "BRODY", items: 0 }
    ]
  };

  ShowCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    return month + "-" + date + "-" + year;
  };

  render() {
    return (
      <div className="container-fluid py-2">
        <h2 class="font-weight-light">Menu App</h2>
        <h4 class="font-weight-light">{this.ShowCurrentDate()}</h4>
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
