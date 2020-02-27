import React, { Component } from "react";
// remember to uninstall axios module

class Card extends Component {
  state = {
    hall: this.props.id,
    day: "day_0",
    items: []
  };

  /*componentDidMount() {
    fetch("https://menu-app-msu.appspot.com/menus")
      .then(response => {
        return response.json();
      })
      .then(data => {
        let hallName = this.state.hall;
        let day = this.state.day;
        let meal = this.props.meal;

        this.setState({
          items: JSON.parse(JSON.parse(data[day])[hallName])[meal]
        });
      });
    //let items = this.props.menus;
    //console.log(items);
  }*/

  render() {
    //let meal = this.props.meal;
    //console.log(meal);
    //let items = this.state.items.map(item => <li key={item}>{item}</li>);
    //console.log("Hall id", this.props.id);
    /*if (this.props.menus) {
      console.log(
        "Card menus",
        JSON.parse(this.props.menus[this.props.id])[this.props.meal]
      );
    }*/
    let items = [];
    if (this.props.menus) {
      items = JSON.parse(this.props.menus[this.props.id])[
        this.props.meal
      ].map(item => <li key={item}>{item}</li>);
    }

    if (!items.length) {
      items = "Closed for " + this.props.meal;
    }
    return (
      <div className="card col-sm-5 shadow">
        <h5 className="card-title font-weight-light text-center">
          {this.props.id}
        </h5>
        <div className="card-body scroll">
          <ul className="card-text">{items}</ul>
        </div>
      </div>
    );
  }
}

export default Card;
