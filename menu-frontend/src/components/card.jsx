import React, { Component } from "react";
import axios from "axios";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      days: []
    };
  }

  componentDidMount() {
    fetch("http://menu-app-msu.appspot.com/menus")
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ days: data });
      });
  }

  render() {
    return (
      <div>
        <div className="container1">{this.state.data}</div>
        <div class="card">
          <div class="card-body">This is some text within a card body.</div>
        </div>
      </div>
    );
  }
}

export default Card;
