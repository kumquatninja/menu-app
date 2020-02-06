import React, { Component } from "react";
// remember to uninstall axios module

class Card extends Component {
  state = {
    hall: this.props.id,
    day: "day_0",
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

        console.log("hall", hallName);

        this.setState({
          items: JSON.parse(JSON.parse(data[day])[hallName])["breakfast"]
        });
        console.log(this.state);
      });
  }

  render() {
    let items = this.state.items.map(item => <li key={item}>{item}</li>);
    console.log(items);
    return (
      <div className="card col-4">
        <div className="card-body">
          <h5 className="card-title text-center">{this.state.hall}</h5>
          <p className="card-text">
            <ul>{items}</ul>
          </p>
        </div>
      </div>
    );
  }
}

export default Card;
