import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CourseDetails extends Component {
  render() {
    return (
      <div>
      
          <div
            className="it-breadcrumb-area it-breadcrumb-bg"
            data-background="assets/img/breadcrumb/breadcrumb.jpg"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="it-breadcrumb-content z-index-3 text-center">
                    <div className="it-breadcrumb-title-box">
                      <h3 className="it-breadcrumb-title">Kurs Detayı</h3>
                    </div>
                    <div className="it-breadcrumb-list-wrap">
                      <div className="it-breadcrumb-list">
                        <span>
                          <a href="/course">home</a>
                        </span>
                        <span className="dvdr">//</span>
                        <Link to="/course">
                        <span>Kurslarımız</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="it-course-details-area pt-120 pb-100">
            <div className="container">
              <div className="row">
                <div className="col-xl-9 col-lg-8">
                  <div className="it-course-details-wrap">
                    <div className="it-evn-details-thumb mb-35">
                      <img src="assets/img/event/details-1.jpg" alt="" />
                    </div>
                    <div className="it-evn-details-rate mb-15">
                      <span>
                        <i className="fa-sharp fa-solid fa-star" />
                        <i className="fa-sharp fa-solid fa-star" />
                        <i className="fa-sharp fa-solid fa-star" />
                        <i className="fa-sharp fa-solid fa-star" />
                        <i className="fa-regular fa-star" />
                        (4.7)
                      </span>
                    </div>
                    <h4 className="it-evn-details-title mb-0 pb-5">
                      Web Development Fully Complete Guideline
                    </h4>
                    <div className="postbox__meta">
                      <span>
                        <i className="fa-light fa-file-invoice" />
                        Lesson 10
                      </span>
                      <span>
                        <i className="fa-light fa-clock" />
                        9.00AM- 01.00 PM
                      </span>
                      <span>
                        <i className="fa-light fa-user" />
                        Students 20+
                      </span>
                    </div>
                    <div className="it-course-details-nav pb-60">
                      <nav>
                        <div
                          className="nav nav-tab"
                          id="nav-tab"
                          role="tablist"
                        >
                       
                          
                        </div>
                      </nav>
                    </div>
                    <div className="it-course-details-content">
                      <div className="tab-content" id="nav-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="nav-home"
                          role="tabpanel"
                          aria-labelledby="nav-home-tab"
                        >
                          <div className="it-course-details-wrapper">
                            <div className="it-evn-details-text mb-40">
                              <h6 className="it-evn-details-title-sm pb-5">
                                Course Description
                              </h6>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim..
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum..
                              </p>
                            </div>
                            <div className="it-evn-details-text">
                              <h6 className="it-evn-details-title-sm pb-5">
                                What Will I Learn From This Course?
                              </h6>
                              <p>
                                Himenaeos. Vestibulum sollicitudin varius mauris
                                non dignissim. Sed quis iaculis est. Nulla quam
                                neque, interdum vitae fermentum lacinia,
                                interdum eu magna. Mauris non posuere tellus.
                                Donec quis euismod tellus. Nam vel lacus eu nisl
                                bibendum accumsan vitae vitae nibh. Nam nec eros
                                id magna hendrerit sagittis Nullam sed mi non
                                odio feugiat volutpat sit amet nec elit.
                                Maecenas id hendrerit ipsum
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="nav-profile"
                          role="tabpanel"
                          aria-labelledby="nav-profile-tab"
                        >
                          <div className="it-course-details-wrapper">
                            <div className="it-evn-details-text mb-40">
                              <h6 className="it-evn-details-title-sm pb-5">
                                Course Description
                              </h6>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim..
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum..
                              </p>
                            </div>
                            <div className="it-evn-details-text">
                              <h6 className="it-evn-details-title-sm pb-5">
                                What Will I Learn From This Course?
                              </h6>
                              <p>
                                Himenaeos. Vestibulum sollicitudin varius mauris
                                non dignissim. Sed quis iaculis est. Nulla quam
                                neque, interdum vitae fermentum lacinia,
                                interdum eu magna. Mauris non posuere tellus.
                                Donec quis euismod tellus. Nam vel lacus eu nisl
                                bibendum accumsan vitae vitae nibh. Nam nec eros
                                id magna hendrerit sagittis Nullam sed mi non
                                odio feugiat volutpat sit amet nec elit.
                                Maecenas id hendrerit ipsum
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="nav-contact"
                          role="tabpanel"
                          aria-labelledby="nav-contact-tab"
                        >
                          <div className="it-course-details-wrapper">
                            <div className="it-evn-details-text mb-40">
                              <h6 className="it-evn-details-title-sm pb-5">
                                Course Description
                              </h6>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim..
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum..
                              </p>
                            </div>
                            <div className="it-evn-details-text">
                              <h6 className="it-evn-details-title-sm pb-5">
                                What Will I Learn From This Course?
                              </h6>
                              <p>
                                Himenaeos. Vestibulum sollicitudin varius mauris
                                non dignissim. Sed quis iaculis est. Nulla quam
                                neque, interdum vitae fermentum lacinia,
                                interdum eu magna. Mauris non posuere tellus.
                                Donec quis euismod tellus. Nam vel lacus eu nisl
                                bibendum accumsan vitae vitae nibh. Nam nec eros
                                id magna hendrerit sagittis Nullam sed mi non
                                odio feugiat volutpat sit amet nec elit.
                                Maecenas id hendrerit ipsum
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="nav-reviews"
                          role="tabpanel"
                          aria-labelledby="nav-reviews-tab"
                        >
                          <div className="it-course-details-wrapper">
                            <div className="it-evn-details-text mb-40">
                              <h6 className="it-evn-details-title-sm pb-5">
                                Course Description
                              </h6>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim..
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum..
                              </p>
                            </div>
                            <div className="it-evn-details-text">
                              <h6 className="it-evn-details-title-sm pb-5">
                                What Will I Learn From This Course?
                              </h6>
                              <p>
                                Himenaeos. Vestibulum sollicitudin varius mauris
                                non dignissim. Sed quis iaculis est. Nulla quam
                                neque, interdum vitae fermentum lacinia,
                                interdum eu magna. Mauris non posuere tellus.
                                Donec quis euismod tellus. Nam vel lacus eu nisl
                                bibendum accumsan vitae vitae nibh. Nam nec eros
                                id magna hendrerit sagittis Nullam sed mi non
                                odio feugiat volutpat sit amet nec elit.
                                Maecenas id hendrerit ipsum
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4">
                  <div className="it-evn-sidebar-box it-course-sidebar-box">
                    <div className="it-evn-sidebar-thumb mb-30">
                      <img src="assets/img/event/details-sm.jpg" alt="" />
                    </div>
                    <div className="it-course-sidebar-rate-box pb-20">
                      <div className="it-course-sidebar-rate d-flex justify-content-between align-items-center">
                        <span>course fee</span>
                        <span className="rate">
                          $60 <i>$120</i>
                        </span>
                      </div>
                      <i>29-da money-back guarantee</i>
                    </div>
                    <a className="it-btn w-100 text-center mb-20">
                      <span>
                        Buy Ticket
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
                    <div className="it-evn-sidebar-list">
                      <ul>
                        <li>
                          <span>4:00 pm 6:00 pm </span> <span>start date</span>
                        </li>
                        <li>
                          <span>enrolled</span>
                          <span>100</span>
                        </li>
                        <li>
                          <span>lectures</span>
                          <span>80</span>
                        </li>
                        <li>
                          <span>skill level</span>
                          <span>Basic</span>
                        </li>
                        <li>
                          <span>class day</span>
                          <span>Monday-friday</span>
                        </li>
                        <li>
                          <span>language</span>
                          <span>English</span>
                        </li>
                      </ul>
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
