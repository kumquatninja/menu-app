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

  getItems = hall => {
    //console.log(hall, this.props.day, this.props.meal);
    let day = this.props.day;
    let meal = this.props.meal;
    let data = this.props.menu;
    //console.log(JSON.parse(data[day]));
  };

  render() {
    return (
      <div className="container-fluid py-2">
        <div className="d-flex flex-row flex-nowrap">
          {this.state.halls.map(hall => (
            <Card
              key={hall.id}
              id={hall.id}
              value={this.props.meal}
              items={this.getItems(hall.id)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default CardCarousel;
