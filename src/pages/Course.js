import React, { Component } from "react";
import Categories from "../components/Home/Categories";
import FooterUp from "../components/FooterUp";

export default class Course extends Component {
  render() {
    return (
      <div>

        <div
          className="it-breadcrumb-area it-breadcrumb-bg"
          data-background="assets/img/breadcrumb/breadcrumb.jpg"
        >
          <div className="container">
            <div className="row ">
              <div className="col-md-12">
                <div className="it-breadcrumb-content z-index-3 text-center">
                  <div className="it-breadcrumb-title-box">
                    <h3 className="it-breadcrumb-title">Kurslarımız</h3>
                  </div>
                  <div className="it-breadcrumb-list-wrap">
                    <div className="it-breadcrumb-list">
                      <span>
                        <a href="index.html">home</a>
                      </span>
                      <span className="dvdr">//</span>
                      <span>Kurslarımız</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

         <Categories/>
         <FooterUp/>

      </div>
    );
  }
}
