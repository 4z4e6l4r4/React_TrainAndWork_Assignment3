import React, { Component } from "react";
import FooterUp from "../components/FooterUp";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <>
          <div
            className="it-breadcrumb-area it-breadcrumb-bg"
            data-background="assets/img/breadcrumb/breadcrumb.jpg"
          >
            <div className="container">
              <div className="row ">
                <div className="col-md-12">
                  <div className="it-breadcrumb-content z-index-3 text-center">
                    <div className="it-breadcrumb-title-box">
                      <h3 className="it-breadcrumb-title">contact us</h3>
                    </div>
                    <div className="it-breadcrumb-list-wrap">
                      <div className="it-breadcrumb-list">
                        <span>
                          <a href="index.html">home</a>
                        </span>
                        <span className="dvdr">//</span>
                        <span>contact</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="it-contact__area pt-120 pb-120">
            <div className="container">
              <div className="it-contact__wrap fix z-index-3 p-relative">
                <div className="it-contact__shape-1 d-none d-xl-block">
                  <img src="assets/img/contact/shape-2-1.png" alt="" />
                </div>
                <div className="row align-items-end">
                  <div className="col-xl-7">
                    <div className="it-contact__right-box">
                      <div className="it-contact__section-box pb-20">
                        <h4 className="it-contact__title pb-15">
                          Get in Touch
                        </h4>
                        <p>
                          Suspendisse ultrice gravida dictum fusce placerat{" "}
                          <br />
                          ultricies integer{" "}
                        </p>
                      </div>
                      <div className="it-contact__content mb-55">
                        <ul>
                          <li>
                            <div className="it-contact__list d-flex align-items-start">
                              <div className="it-contact__icon">
                                <span>
                                  <i className="fa-solid fa-location-dot" />
                                </span>
                              </div>
                              <div className="it-contact__text">
                                <span>Our Address</span>
                                <a href="#">
                                  1564 Goosetown Drive <br />
                                  Matthews, NC 28105
                                </a>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="it-contact__list d-flex align-items-start">
                              <div className="it-contact__icon">
                                <span>
                                  <i className="fa-solid fa-clock" />
                                </span>
                              </div>
                              <div className="it-contact__text">
                                <span>Hours of Operation</span>
                                <a href="#">Mon - Fri: 9.00am to 5.00pm</a>
                                <span>[2nd sat Holiday]</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="it-contact__list d-flex align-items-start">
                              <div className="it-contact__icon">
                                <span>
                                  <i className="fa-solid fa-phone phone" />
                                </span>
                              </div>
                              <div className="it-contact__text">
                                <span>contact</span>
                                <a href="tel:+99358954565">+99- 35895-4565</a>
                                <a href="https://ordainit.com/cdn-cgi/l/email-protection#3f4c4a4f4f504d4b46504a7f56515950115c5052">
                                  <span
                                    className="__cf_email__"
                                    data-cfemail="ef9c9a9f9f809d9b96809aaf86818980c18c8082"
                                  >
                                    [email&nbsp;protected]
                                  </span>
                                </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="it-contact__bottom-box d-flex align-items-center justify-content-between">
                        <div className="it-contact__scrool smooth">
                          <a href="#it-newsletter">
                            <i className="fa-solid fa-arrow-down" />
                            Customer Care
                          </a>
                        </div>
                        <div className="it-footer-social">
                          <a href="#">
                            <i className="fa-brands fa-facebook-f" />
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-instagram" />
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-pinterest-p" />
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-twitter" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5">
                    <div className="it-contact__form-box">
                      <form action="#">
                        <div className="row">
                          <div className="col-12 mb-25">
                            <div className="it-contact-input-box">
                              <label>Name*</label>
                              <input type="text" placeholder="Name" />
                            </div>
                          </div>
                          <div className="col-12 mb-25">
                            <div className="it-contact-input-box">
                              <label>Email Address*</label>
                              <input type="email" placeholder="Email" />
                            </div>
                          </div>
                          <div className="col-12 mb-25">
                            <div className="it-contact-input-box">
                              <label>Phone*</label>
                              <input type="text" placeholder="Phone" />
                            </div>
                          </div>
                          <div className="col-12 mb-25">
                            <div className="it-contact-input-box">
                              <label>Subject*</label>
                              <input type="text" placeholder="Subject" />
                            </div>
                          </div>
                          <div className="col-12 mb-25">
                            <div className="it-contact-textarea-box">
                              <label>Message</label>
                              <textarea
                                placeholder="Message"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                      <button type="submit" className="it-btn">
                        <span>
                          Send Message
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
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>

        <br />
        <br />
        <FooterUp />
      </div>
    );
  }
}
