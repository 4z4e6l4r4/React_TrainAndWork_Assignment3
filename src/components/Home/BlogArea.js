import React, { Component } from "react";

export default class BlogArea extends Component {
  render() {
    return (
      <div>
        <div className="it-blog-area pt-90 pb-90 ">
          <div className="container">
            <div className="it-blog-title-wrap mb-80">
              <div className="row align-items-end">
                <div className="col-xl-8 col-lg-8 col-md-8">
                  <div className="it-blog-title-box d-flex align-items-start flex-column">
                    <span className="it-section-subtitle">BLOG POST</span>
                    <h4 className="it-section-title">
                      Post Popular
                      <span className="p-relative z-index">
                        Post.
                        <svg
                          className="title-shape-2"
                          width={168}
                          height={65}
                          viewBox="0 0 168 65"
                          fill="none"
                          xmlns="../../www.w3.org/2000/svg.html"
                        >
                          <path
                            d="M73.3761 8.49147C78.4841 6.01353 82.5722 4.25154 88.8933 3.3035C94.2064 2.50664 99.6305 2.0701 104.981 1.94026C120.426 1.56549 135.132 4.90121 146.506 9.70405C158.628 14.8228 166.725 22.5638 166.074 31.6501C165.291 42.5779 151.346 51.7039 133.508 56.8189C110.253 63.4874 81.7065 63.8025 58.5605 60.8285C37.5033 58.123 11.6304 51.7165 3.58132 40.0216C-3.43085 29.8337 12.0728 18.1578 27.544 11.645C40.3656 6.24763 55.7082 2.98328 70.8043 4.08403C81.9391 4.89596 93.2164 6.87822 102.462 9.99561C112.874 13.5066 120.141 18.5932 127.862 23.6332"
                            stroke="#0AB99D"
                            strokeWidth={3}
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </h4>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="it-blog-button text-start text-md-end">
                    <a className="it-btn" href="blog-1.html">
                      <span>
                        all blog post
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
            </div>

            <div className="row">

              <div className="col-xl-4 col-lg-4 col-md-6 mb-30 ">
                <div
                  className="it-blog-item-box "
                  data-background="assets/img/blog/bg-1.jpg"
                >
                  <div className="it-blog-item">
                    <div className="it-blog-thumb fix">
                      <a href="blog-details.html">
                        <img src="assets/img/blog/blog-1-1.jpg" alt="" />
                      </a>
                    </div>
                    <div className="it-blog-meta pb-15">
                      <span>
                        <i className="fa-solid fa-calendar-days" />
                        14 June 2023
                      </span>
                      <span>
                        <i className="fa-light fa-messages" />
                        Comment (06)
                      </span>
                    </div>
                    <h4 className="it-blog-title">
                      <a href="blog-details.html">
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat
                      </a>
                    </h4>
                    <a className="it-btn sm" href="blog-details.html">
                      <span>
                        read more
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

              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div
                  className="it-blog-item-box"
                  data-background="assets/img/blog/bg-1.jpg"
                >
                  <div className="it-blog-item">
                    <div className="it-blog-thumb fix">
                      <a href="blog-details.html">
                        <img src="assets/img/blog/blog-1-2.jpg" alt="" />
                      </a>
                    </div>
                    <div className="it-blog-meta pb-15">
                      <span>
                        <i className="fa-solid fa-calendar-days" />
                        14 June 2023
                      </span>
                      <span>
                        <i className="fa-light fa-messages" />
                        Comment (06)
                      </span>
                    </div>
                    <h4 className="it-blog-title">
                      <a href="blog-details.html">
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat
                      </a>
                    </h4>
                    <a className="it-btn sm" href="blog-details.html">
                      <span>
                        read more
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
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div
                  className="it-blog-item-box"
                  data-background="assets/img/blog/bg-1.jpg"
                >
                  <div className="it-blog-item">
                    <div className="it-blog-thumb fix">
                      <a href="blog-details.html">
                        <img src="assets/img/blog/blog-1-3.jpg" alt="" />
                      </a>
                    </div>
                    <div className="it-blog-meta pb-15">
                      <span>
                        <i className="fa-solid fa-calendar-days" />
                        14 June 2023
                      </span>
                      <span>
                        <i className="fa-light fa-messages" />
                        Comment (06)
                      </span>
                    </div>
                    <h4 className="it-blog-title">
                      <a href="blog-details.html">
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat
                      </a>
                    </h4>
                    <a className="it-btn sm" href="blog-details.html">
                      <span>
                        read more
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}
