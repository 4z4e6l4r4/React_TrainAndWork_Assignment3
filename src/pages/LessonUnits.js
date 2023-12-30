import React, { Component } from "react";
import FooterUp from "../components/FooterUp";
import { Link } from "react-router-dom";

export default class LessonUnits extends Component {
  render() {
    return ( this.props.isValid ?
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
                    <h3 className="it-breadcrumb-title">Üniteler</h3>
                  </div>
                  <div className="it-breadcrumb-list-wrap">
                    <div className="it-breadcrumb-list">
                      <span>
                        <a href="index.html">home</a>
                      </span>
                      <span className="dvdr">//</span>
                      <span>Üniteler</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="it-feature-area grey-bg it-feature-style-2 pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div
                  className="it-feature-item text-center"
                  data-background="assets/img/feature/bg-1-1.jpg"
                >
                  <div className="it-feature-item-content z-index">
                    <Link to="/courseDetails">
                      <div className="it-feature-icon">
                        <span>
                          <i className="flaticon-class" />
                        </span>
                      </div>
                      <div className="it-feature-text pt-30">
                        <h4 className="it-feature-title">1. ÜNİTE</h4>
                        <p>
                          Lorem ipsum dolor amet, consectetur adipiscing elit,
                          sed eiusmod tempor incididunt ut labore et dolore
                        </p>
                      </div>
                      <div className="it-feature-button">
                        <a
                          className="it-btn-border"
                          href="service-details.html"
                        >
                          <span>
                            Daha Fazla
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
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <Link to="/courseDetails">
                  <div
                    className="it-feature-item text-center"
                    data-background="assets/img/feature/bg-1-1.jpg"
                  >
                    <div className="it-feature-item-content z-index">
                      <div className="it-feature-icon">
                        <span>
                          <i className="flaticon-coach" />
                        </span>
                      </div>
                      <div className="it-feature-text pt-30">
                        <h4 className="it-feature-title">2. ÜNİTE</h4>
                        <p>
                          Lorem ipsum dolor amet, consectetur adipiscing elit,
                          sed eiusmod tempor incididunt ut labore et dolore
                        </p>
                      </div>
                      <div className="it-feature-button">
                        <a
                          className="it-btn-border"
                          href="service-details.html"
                        >
                          <span>
                            Learn More
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
                </Link>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div
                  className="it-feature-item text-center"
                  data-background="assets/img/feature/bg-1-1.jpg"
                >
                  <Link to="/courseDetails">
                    <div className="it-feature-item-content z-index">
                      <div className="it-feature-icon">
                        <span>
                          <i className="flaticon-study" />
                        </span>
                      </div>
                      <div className="it-feature-text pt-30">
                        <h4 className="it-feature-title">STRATEGI LOCATION</h4>
                        <p>
                          Lorem ipsum dolor amet, consectetur adipiscing elit,
                          sed eiusmod tempor incididunt ut labore et dolore
                        </p>
                      </div>
                      <div className="it-feature-button">
                        <a
                          className="it-btn-border"
                          href="service-details.html"
                        >
                          <span>
                            Learn More
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
                  </Link>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div
                  className="it-feature-item text-center"
                  data-background="assets/img/feature/bg-1-1.jpg"
                >
                  <Link to="/courseDetails">
                    <div className="it-feature-item-content z-index">
                      <div className="it-feature-icon">
                        <span>
                          <i className="flaticon-class" />
                        </span>
                      </div>
                      <div className="it-feature-text pt-30">
                        <h4 className="it-feature-title">ACTIVE LEARNING</h4>
                        <p>
                          Lorem ipsum dolor amet, consectetur adipiscing elit,
                          sed eiusmod tempor incididunt ut labore et dolore
                        </p>
                      </div>
                      <div className="it-feature-button">
                        <a
                          className="it-btn-border"
                          href="service-details.html"
                        >
                          <span>
                            Learn More
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
                  </Link>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div
                  className="it-feature-item text-center"
                  data-background="assets/img/feature/bg-1-1.jpg"
                >
                  <Link to="/courseDetails">
                    <div className="it-feature-item-content z-index">
                      <div className="it-feature-icon">
                        <span>
                          <i className="flaticon-coach" />
                        </span>
                      </div>
                      <div className="it-feature-text pt-30">
                        <h4 className="it-feature-title">EXPERT TEACHERS</h4>
                        <p>
                          Lorem ipsum dolor amet, consectetur adipiscing elit,
                          sed eiusmod tempor incididunt ut labore et dolore
                        </p>
                      </div>
                      <div className="it-feature-button">
                        <a
                          className="it-btn-border"
                          href="service-details.html"
                        >
                          <span>
                            Learn More
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
                  </Link>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div
                  className="it-feature-item text-center"
                  data-background="assets/img/feature/bg-1-1.jpg"
                >
                  <Link to="/courseDetails">
                    <div className="it-feature-item-content z-index">
                      <div className="it-feature-icon">
                        <span>
                          <i className="flaticon-study" />
                        </span>
                      </div>
                      <div className="it-feature-text pt-30">
                        <h4 className="it-feature-title">STRATEGI LOCATION</h4>
                        <p>
                          Lorem ipsum dolor amet, consectetur adipiscing elit,
                          sed eiusmod tempor incididunt ut labore et dolore
                        </p>
                      </div>
                      <div className="it-feature-button">
                        <a
                          className="it-btn-border"
                          href="service-details.html"
                        >
                          <span>
                            Learn More
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
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FooterUp />
      </div>
    :null
    );
  }
}
