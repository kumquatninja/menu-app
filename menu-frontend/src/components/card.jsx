import React, { Component } from "react";
// remember to uninstall axios module

class Card extends Component {
  constructor() {
    super();
    this.state = {
      hall: "akers",
      akersBreakfast: []
    };
  }

  componentDidMount() {
    fetch("http://menu-app-msu.appspot.com/menus")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          akersBreakfast: JSON.parse(JSON.parse(data["day_0"])["AKERS"])[
            "breakfast"
          ]
        });
        console.log(this.state);
      });
  }

  render() {
    let items = this.state.akersBreakfast.map(item => (
      <li key={item}>{item}</li>
    ));
    console.log(items);
    return (
      <div>
        <div className="card" width="18rem">
          <div className="card-body">
            <h5 className="card-title text-center">Akers</h5>
            <p className="card-text">
              <ul>{items}</ul>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
