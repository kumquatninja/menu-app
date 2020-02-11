import React, { Component } from "react";
// remember to uninstall axios module

class Card extends Component {
  state = {
    hall: this.props.id,
    day: "day_0",
    meal: this.props.value,
    items: []
  };

  componentDidMount() {
    fetch("http://menu-app-msu.appspot.com/menus")
      .then(response => {
        return response.json();
      })
      .then(data => {
        let hallName = this.state.hall;
        let day = this.state.day;
        let meal = this.state.meal;

        this.setState({
          items: JSON.parse(JSON.parse(data[day])[hallName])[meal]
        });
      });
  }

  render() {
    let items = this.state.items.map(item => <li key={item}>{item}</li>);

    console.log("Props", this.props);

    if (!this.state.items.length) {
      items = "Closed for " + this.state.meal;
    }
    return (
      <div className="card col-5 shadow">
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
