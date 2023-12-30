import React, { Component } from "react";
import FooterUp from "../components/FooterUp";
import Poster from "../components/HomeComponents.js/Poster";
import Categories from "../components/HomeComponents.js/Categories";
import TopPopCourse from "../components/HomeComponents.js/TopPopCourse";
import AboutUs from "../components/HomeComponents.js/AboutUs";
import ContactUs from "../components/HomeComponents.js/ContactUs";
import Motivation from "../components/HomeComponents.js/Motivation";
import BlogArea from "../components/HomeComponents.js/BlogArea";

export default class extends Component {
  render() {
    return (
      <div>
        <main>
          <Poster />
          <Categories />
          <TopPopCourse />
          <AboutUs />
          <ContactUs />
          <Motivation />
          <BlogArea />
          <FooterUp />
        </main>
      </div>
    );
  }
}
