import React, { Component } from "react";

const NavBar = ({ meal }) => {
  const mStr = meal[0].toUpperCase() + meal.slice(1);
  return (
    <header className="text-center">
      <h2 className="font-weight-light">
        <a className="text-dark" href="#">
          Menu App
        </a>
      </h2>
      <div className="dropdown">
        <button
          className="btn btn-secondary btn-lg dropdown-toggle font-weight-light"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {mStr}
        </button>
      </div>
    </header>
  );
};

export default NavBar;
