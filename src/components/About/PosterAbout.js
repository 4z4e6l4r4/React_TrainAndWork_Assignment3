import React, { Component } from "react";

export default class PosterAbout extends Component {
  render() {
    return (
      <div>
        <div
          className="it-breadcrumb-area it-breadcrumb-bg"
        //   STYLE ADDED
          style={{marginTop:'140px'}}
          data-background="assets/img/breadcrumb/breadcrumb.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="it-breadcrumb-content z-index-3 text-center">
                  <div className="it-breadcrumb-title-box">
                    <h3 className="it-breadcrumb-title">about us</h3>
                  </div>
                  <div className="it-breadcrumb-list-wrap">
                    <div className="it-breadcrumb-list">
                      <span>
                        <a href="index.html">home</a>
                      </span>
                      <span className="dvdr">//</span>
                      <span>about us</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
