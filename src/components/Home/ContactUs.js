import React, { Component } from "react";

export default class ContactUs extends Component {
  render() {
    return (
      <div>
        <div
          className="it-video-area it-video-bg p-relative fix pt-100 pb-95"
          data-background="assets/img/video/bg-1-1.jpg"
        >
          <div className="it-video-shape-1 d-none d-lg-block">
            <img src="assets/img/video/shape-1-1.png" alt="" />
          </div>
          <div className="it-video-shape-2 d-none d-lg-block">
            <img src="assets/img/video/shape-1-2.png" alt="" />
          </div>
          <div className="it-video-shape-3 d-none d-lg-block">
            <img src="assets/img/video/shape-1-3.png" alt="" />
          </div>
          <div className="it-video-shape-4 d-none d-lg-block">
            <img src="assets/img/video/shape-1-4.png" alt="" />
          </div>
          <div className="it-video-shape-5 d-none d-lg-block">
            <img src="assets/img/video/shape-1-5.png" alt="" />
          </div>

          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-7 col-md-9 col-sm-9">
                <div className="it-video-content">
                  <span>Join Our New Session</span>
                  <h3 className="it-video-title">
                    Call To Enroll Your Child <br />
                    <a href="tel:+91958423452">(+91)958423452</a>
                  </h3>
                  <div className="it-video-button">
                    <a className="it-btn" href="contact.html">
                      <span>
                        Katıl Bize
                        <svg
                          width={17}
                          height={14}
                          viewBox="0 0 17 14"
                          fill="none"
                          xmlns="../../www.w3.org/2000/svg.html"
                        >
                          <path
                            d="M11 1.24023L16 7.24023L11 13.2402"
                            stroke="currentcolor"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1 7.24023H16"
                            stroke="currentcolor"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-3 col-sm-3">
                <div className="it-video-play-wrap d-flex justify-content-start justify-content-md-end align-items-center">
                  <div className="it-video-play text-center">
                    <a
                      className="popup-video play"
                      href="../../www.youtube.com/watcha6fd.html?v=PO_fBTkoznc"
                    >
                      <i className="fas fa-play" />
                    </a>
                    <a className="text" href="#">
                      watch now
                    </a>
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
