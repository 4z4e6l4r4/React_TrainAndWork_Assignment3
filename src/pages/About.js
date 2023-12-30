import React, { Component } from "react";
import Statistics from "../components/About/Statistics";
import Comments from "../components/About/Comments";
import TopPopCourse from "../components/Home/TopPopCourse";
import PosterAbout from "../components/About/PosterAbout";
import AboutUs from "../components/Home/AboutUs";
import Teachers from "../components/About/Teachers";
import FooterUp from "../components/FooterUp";

export default class About extends Component {
  render() {
    return (
      <div>
        <main>
          <PosterAbout />
          <AboutUs />
          <br />
          <br />
          <br />
          <Statistics />
          <br />
          <Comments />
          <TopPopCourse />
          <Teachers />
          <FooterUp />
        </main>
      </div>
    );
  }
}
