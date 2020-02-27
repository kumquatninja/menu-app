import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";

class NavBar extends Component {
  render() {
    const meal = this.props.meal;
    const mStr = meal[0].toUpperCase() + meal.slice(1);
    let menu;

    return (
      <header className="text-center">
        <h2 className="font-weight-light">
          <a className="text-dark" href="#">
            &#x1F35C; Menu App
          </a>
        </h2>
        <h6>v0.1.2 - Alpha</h6>
        <Dropdown>
          <Dropdown.Toggle variant="primary lg" id="dropdown-basic">
            {mStr.toUpperCase()}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              href="#/action-1"
              onClick={() => this.props.changeMeal("breakfast")}
            >
              BREAKFAST
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-2"
              onClick={() => this.props.changeMeal("lunch")}
            >
              LUNCH
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-3"
              onClick={() => this.props.changeMeal("dinner")}
            >
              DINNER
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </header>
    );
  }
}

/*
<div className="dropdown">
  <button
    className="btn btn-primary btn-lg dropdown-toggle font-weight-light"
    type="button"
    id="dropdownMenuButton"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
  >
    {mStr}
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">
      Action
    </a>
    <a class="dropdown-item" href="#">
      Another action
    </a>
    <a class="dropdown-item" href="#">
      Something else here
    </a>
  </div>
</div>
*/
export default NavBar;
