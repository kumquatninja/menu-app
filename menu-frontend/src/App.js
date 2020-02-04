import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  render() {
    return (
      <div>
        <input placeholder="Enter todo" />
        <button>Add!</button>
        {this.state.todos.length === 0
          ? "No todos yet"
          : "You still have some todos"}
      </div>
    );
  }
}

export default App;
