import React, { Component } from "react";
import Statistics from "../components/About/Statistics";
import Comments from "../components/About/Comments";

export default class About extends Component {
  render() {
    return (
      <div>
        <main>
          <br />
          <br />
          <br />

          <Statistics />
          <Comments />
        </main>
      </div>
    );
  }
}
