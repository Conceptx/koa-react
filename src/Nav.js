import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <div className="App">
        <div className="row nav-wrapper">
          <nav className="transparent z-depth-2">
            <ul className="hide-on-med-and-down">
              <li>
                <a href="#!" className="black-text">
                  Services
                </a>
              </li>
              <li>
                <a href="#!" className="black-text">
                  Profile
                </a>
              </li>
              <li>
                <a href="#!" className="black-text">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#!" className="black-text">
                  Interests
                </a>
              </li>
              <li>
                <a href="#!" className="black-text">
                  Pricing
                </a>
              </li>
            </ul>
            <a className="brand-logo blue-text hide-on-large-only left">Menu</a>
            <a
              className="hide-on-large-only right dropdown-trigger"
              data-target="dropdown"
            >
              <i className="material-icons large blue-text">menu</i>
            </a>
            <ul className="dropdown-content" id="dropdown">
              <li>
                <a href="#!" className="black-text">
                  Services
                </a>
              </li>
              <li>
                <a href="#!" className="black-text">
                  Profile
                </a>
              </li>
              <li>
                <a href="#!" className="black-text">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#!" className="black-text">
                  Interests
                </a>
              </li>
              <li>
                <a href="#!" className="black-text">
                  Pricing
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav;
