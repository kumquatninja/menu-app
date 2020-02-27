import React, { Component } from "react";
import Card from "./card";
import "../custom.css";

class CardCarousel extends Component {
  state = {
    halls: [
      {
        id: "AKERS",
        items: [],
        location: [42.724532, -84.464723],
        distance: 0
      },
      {
        id: "SNYDER-PHILLIPS",
        items: [],
        location: [42.730025, -84.473446],
        distance: 0
      },
      { id: "CASE", items: [], location: [42.724536, -84.488452], distance: 0 },
      { id: "BRODY", items: [], location: [42.73148, -84.495256], distance: 0 },
      { id: "SHAW", items: [], location: [42.726872, -84.475141], distance: 0 },
      { id: "OWEN", items: [], location: [42.726377, -84.470753], distance: 0 },
      {
        id: "LANDON",
        items: [],
        location: [42.734045, -84.485012],
        distance: 0
      },
      {
        id: "HOLDEN",
        items: [],
        location: [42.721202, -84.489528],
        distance: 0
      },
      {
        id: "WILSON",
        items: [],
        location: [42.722793, -84.488037],
        distance: 0
      },
      {
        id: "HOLMES",
        itmes: [],
        location: [42.726834, -84.464562],
        distance: 0
      }
    ]
  };

  sortbyDistance = () => {
    const halls = [...this.state.halls];
    const pos = this.props.position;
    //console.log("userposition", pos);
    halls.sort(function(a, b) {
      return a["distance"] - b["distance"];
    });
    this.setState({ halls });
  };

  updateDistances = () => {
    const pos = this.props.position;
    const halls = this.state.halls.map(h => {
      h.distance = Math.sqrt(
        Math.pow(pos[0] - h.location[0], 2) +
          Math.pow(pos[1] - h.location[1], 2)
      );
      return h;
    });
    this.setState({ halls });
  };

  componentDidMount() {
    this.updateDistances();
    this.sortbyDistance();
  }

  render() {
    //console.log(this.props.menus);
    return (
      <div className="container-fluid py-2">
        <div className="d-flex justify-content-center flex-row flex-wrap centered">
          {this.state.halls.map(hall => (
            <Card
              key={hall.id}
              id={hall.id}
              meal={this.props.meal}
              menus={this.props.menus}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default CardCarousel;
