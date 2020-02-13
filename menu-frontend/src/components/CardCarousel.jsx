import React, { Component } from "react";
import Card from "./card";
import "../custom.css";

class CardCarousel extends Component {
  state = {
    halls: [
      { id: "AKERS", items: [], location: [42.724532, -84.464723] },
      { id: "SNYDER-PHILLIPS", items: [], location: [42.730025, -84.473446] },
      { id: "CASE", items: [], location: [42.724536, -84.488452] },
      { id: "BRODY", items: [], location: [42.73148, -84.495256] },
      { id: "SHAW", items: [], location: [42.726872, -84.475141] },
      { id: "OWEN", items: [], location: [42.726377, -84.470753] },
      { id: "LANDON", items: [], location: [42.734045, -84.485012] },
      { id: "HOLDEN", items: [], location: [42.721202, -84.489528] },
      { id: "WILSON", items: [], location: [42.722793, -84.488037] },
      { id: "HOLMES", itmes: [], location: [42.726834, -84.464562] }
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
