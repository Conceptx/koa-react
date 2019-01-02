import React, { Component } from "react";
import "./style.css";

class Main extends Component {
  render() {
    return (
      <section className="section section-main center">
        <div className="row">
          <h1 className="hide-on-med-and-down homepage_hero_large blue-text">
            Building
            <span className="black-text" id="char-1">
              {" "}
              Seamless{" "}
            </span>
            Apps
          </h1>
          <h1 className="hide-on-large-only homepage_hero_small blue-text">
            Building
            <span className="black-text" id="char-1" />
            Apps
          </h1>
        </div>
      </section>
    );
  }
}

export default Main;
