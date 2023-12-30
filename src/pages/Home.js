import React, { Component } from "react";
import FooterUp from "../components/FooterUp";
import Poster from "../components/Home/Poster";
import Categories from "../components/Home/Categories";
import TopPopCourse from "../components/Home/TopPopCourse";
import AboutUs from "../components/Home/AboutUs";
import ContactUs from "../components/Home/ContactUs";
import Motivation from "../components/Home/Motivation";
import BlogArea from "../components/Home/BlogArea";

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
