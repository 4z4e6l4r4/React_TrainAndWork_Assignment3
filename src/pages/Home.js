import React, { Component } from "react";
import FooterUp from "../components/FooterUp";
import Poster from "../components/HomeComponents.js/Poster";
import Categories from "../components/HomeComponents.js/Categories";

export default class extends Component {
  render() {
    return (
      <div>
        <main>
          <Poster />
          <Categories />

          <br />
          <br />
          <br />
          <br />

          <FooterUp />
        </main>
      </div>
    );
  }
}
