import React, { Component } from "react";

class Card extends Component {
  state = {
    hall: "dining hall",
    menuItems: ["item1", "item2"]
  };

  renderItems() {
    return (
      <ul>
        {this.state.menuItems.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{this.state.hall}</h5>
          <p class="card-text">{this.renderItems()}</p>
        </div>
      </div>
    );
  }
}

export default Card;
