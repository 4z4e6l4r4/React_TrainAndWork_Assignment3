import React, { Component } from "react";

export default class Comments extends Component {
  render() {
    return (
      <div
        className="it-testimonial-3-area"
        data-background="/public/assets/img/testimonial/bg-2.png"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-4 d-none d-lg-block">
              <div className="it-testimonial-3-thumb">
                <img src="assets/img/testimonial/thumb-2.png" alt="" />
              </div>
            </div>
            <div className="col-xl-7 col-lg-8">
              <div className="it-testimonial-3-box z-index p-relative">
                <div className="it-testimonial-3-shape-1">
                  <img src="assets/img/testimonial/shape-3-1.png" alt="" />
                </div>
                <div
                  className="it-testimonial-3-wrapper p-relative"
                  data-background="assets/img/testimonial/bg-3.png"
                >
                  <div className="it-testimonial-3-quote d-none d-md-block">
                    <img src="assets/img/testimonial/quot.png" alt="" />
                  </div>
                  <div className="swiper-container it-testimonial-3-active">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="it-testimonial-3-item">
                          <div className="it-testimonial-3-content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquipLorem ipsum dolor sit amet, consectetur
                              adipiscing elit.
                            </p>
                            <div className="it-testimonial-3-author-box d-flex align-items-center">
                              <div className="it-testimonial-3-avata">
                                <img
                                  src="assets/img/avatar/avatar-3-1.png"
                                  alt=""
                                />
                              </div>
                              <div className="it-testimonial-3-author-info">
                                <h5>Jorge Carter</h5>
                                <span>Software Developer</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="it-testimonial-3-item">
                          <div className="it-testimonial-3-content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquipLorem ipsum dolor sit amet, consectetur
                              adipiscing elit.
                            </p>
                            <div className="it-testimonial-3-author-box d-flex align-items-center">
                              <div className="it-testimonial-3-avata">
                                <img
                                  src="assets/img/avatar/avatar-2.png"
                                  alt=""
                                />
                              </div>
                              <div className="it-testimonial-3-author-info">
                                <h5>Jorge Carter</h5>
                                <span>Gloria Burnett</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="it-testimonial-3-item">
                          <div className="it-testimonial-3-content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquipLorem ipsum dolor sit amet, consectetur
                              adipiscing elit.
                            </p>
                            <div className="it-testimonial-3-author-box d-flex align-items-center">
                              <div className="it-testimonial-3-avata">
                                <img
                                  src="assets/img/avatar/avatar-1.png"
                                  alt=""
                                />
                              </div>
                              <div className="it-testimonial-3-author-info">
                                <h5>Laurie Duncanr</h5>
                                <span>Software Developer</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="test-slider-dots d-none d-sm-block" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
