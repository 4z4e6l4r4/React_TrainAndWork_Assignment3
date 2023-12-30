import React, { Component } from "react";
import FooterUp from "../components/FooterUp";

export default class Faqs extends Component {
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
                      <h3 className="it-breadcrumb-title">FAQS</h3>
                    </div>
                    <div className="it-breadcrumb-list-wrap">
                      <div className="it-breadcrumb-list">
                        <span>
                          <a href="index.html">home</a>
                        </span>
                        <span className="dvdr">//</span>
                        <span>FAQS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="it-faq-area p-relative pt-120 pb-120">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="it-faq-wrap">
                    <div className="it-custom-accordion it-custom-accordion-style-3">
                      <div className="accordion" id="accordionExample">
                        <div className="accordion-items tp-faq-active">
                          <h2 className="accordion-header" id="headingOne">
                            <button
                              className="accordion-buttons "
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Why do students prefer online learning?
                            </button>
                          </h2>
                          <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body d-flex align-items-center">
                              <p className="mb-0">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                              </p>
                              <img
                                className="d-none d-xl-block"
                                src="assets/img/faq/thumb-1.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="accordion-items">
                          <h2 className="accordion-header" id="headingTwo">
                            <button
                              className="accordion-buttons collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              Where should I study abroad?
                            </button>
                          </h2>
                          <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body d-flex align-items-center">
                              <p className="mb-0">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                              </p>
                              <img
                                className="d-none d-xl-block"
                                src="assets/img/faq/thumb-1.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="accordion-items">
                          <h2 className="accordion-header" id="headingThree">
                            <button
                              className="accordion-buttons collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              How can I contact a school directly?
                            </button>
                          </h2>
                          <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body d-flex align-items-center">
                              <p className="mb-0">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est
                                laborum..
                              </p>
                              <img
                                className="d-none d-xl-block"
                                src="assets/img/faq/thumb-1.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="accordion-items">
                          <h2 className="accordion-header" id="headingFour">
                            <button
                              className="accordion-buttons collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFour"
                              aria-expanded="false"
                              aria-controls="collapseFour"
                            >
                              How do I find a school where I want to study?
                            </button>
                          </h2>
                          <div
                            id="collapseFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFour"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body d-flex align-items-center">
                              <p className="mb-0">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                              </p>
                              <img
                                className="d-none d-xl-block"
                                src="assets/img/faq/thumb-1.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="accordion-items">
                          <h2 className="accordion-header" id="headingFour4">
                            <button
                              className="accordion-buttons collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFour4"
                              aria-expanded="false"
                              aria-controls="collapseFour4"
                            >
                              How does it create content?
                            </button>
                          </h2>
                          <div
                            id="collapseFour4"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFour4"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body d-flex align-items-center">
                              <p className="mb-0">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. 
                              </p>
                              <img
                                className="d-none d-xl-block"
                                src="assets/img/faq/thumb-1.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
        <FooterUp/>
      </div>
    );
  }
}
