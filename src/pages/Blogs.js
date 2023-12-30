import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Blogs extends Component {
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
              <h3 className="it-breadcrumb-title">Blog</h3>
            </div>
            <div className="it-breadcrumb-list-wrap">
              <div className="it-breadcrumb-list">
                <span>
                  <a href="index.html">home</a>
                </span>
                <span className="dvdr">//</span>
                <span>Blog</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="postbox__area pt-120 pb-120">
    <div className="container">
      <div className="row">
        <div className="col-xl-8 col-lg-8 mb-40">
          <div className="postbox__details-wrapper">
            <div className="postbox__thumb-box mb-80">
              <div className="postbox__main-thumb mb-30">
                <img src="assets/img/blog/blog-sidebar-1.jpg" alt="" />
              </div>
              <div className="postbox__content-box">
                <div className="postbox__meta">
                  <span>
                    <i className="fa-light fa-calendar-days" />
                    April 21, 2023
                  </span>
                  <span>
                    <i className="fal fa-user" />
                    Alamgir Chowdhuri
                  </span>
                </div>
                <h4 className="postbox__details-title">
                  <a href="blog-details.html">
                    Curabitur at fermentum purus. Interdum et malesuada fames ac
                    ante ipsum
                  </a>
                </h4>
                <Link className="it-btn mt-15" to="/blogDetails">
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
                </Link>
              </div>
            </div>
            <div className="postbox__thumb-box mb-80">
              <div className="it-postbox__wrapper p-relative mb-30">
                <div className="swiper-container postbox__thumb-slider-active">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="postbox__main-thumb">
                        <img src="assets/img/blog/blog-sidebar-2.jpg" alt="" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="postbox__main-thumb">
                        <img src="assets/img/blog/blog-sidebar-3.jpg" alt="" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="postbox__main-thumb">
                        <img src="assets/img/blog/blog-sidebar-1.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="postbox__content-box">
                <div className="postbox__meta">
                  <span>
                    <i className="fa-light fa-calendar-days" />
                    April 21, 2023
                  </span>
                  <span>
                    <i className="fal fa-user" />
                    Alamgir Chowdhuri
                  </span>
                </div>
                <h4 className="postbox__details-title">
                  <a href="blog-details.html">
                    Aenean nec aliquet enim. Donec at dapibus enim. Integer et
                    tur is vel turpis
                  </a>
                </h4>
                <Link className="it-btn mt-15" to="/blogDetails">
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
                </Link>
              </div>
            </div>
            <div className="postbox__thumb-box">
              <div className="postbox__main-thumb mb-30">
                <img src="assets/img/blog/blog-sidebar-3.jpg" alt="" />
              </div>
              <div className="postbox__content-box">
                <div className="postbox__meta">
                  <span>
                    <i className="fa-light fa-calendar-days" />
                    April 21, 2023
                  </span>
                  <span>
                    <i className="fal fa-user" />
                    Alamgir Chowdhuri
                  </span>
                </div>
                <h4 className="postbox__details-title">
                  <a href="blog-details.html">
                    Curabitur at fermentum purus. Interdum et malesuada fames ac
                    ante ipsum
                  </a>
                </h4>
                <Link className="it-btn mt-15" to="/blogDetails">
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
                    </svg>{" "}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4">
          <div className="it-sv-details-sidebar">
            <div className="it-sv-details-sidebar-search mb-55">
              <input type="text" placeholder="search" />
              <button type="submit">
                <i className="fal fa-search" />
              </button>
            </div>
            <div className="it-sv-details-sidebar-widget mb-55">
              <h4 className="it-sv-details-sidebar-title mb-30">
                service category
              </h4>
              <div className="it-sv-details-sidebar-category mb-10">
                graphic design
                <span>
                  <i className="fa-light fa-angle-right" />
                </span>
              </div>
              <div className="it-sv-details-sidebar-category active mb-10">
                web design
                <span>
                  <i className="fa-light fa-angle-right" />
                </span>
              </div>
              <div className="it-sv-details-sidebar-category mb-10">
                it and software
                <span>
                  <i className="fa-light fa-angle-right" />
                </span>
              </div>
              <div className="it-sv-details-sidebar-category mb-10">
                seles marketing
                <span>
                  <i className="fa-light fa-angle-right" />
                </span>
              </div>
              <div className="it-sv-details-sidebar-category mb-10">
                art &amp; humanities
                <span>
                  <i className="fa-light fa-angle-right" />
                </span>
              </div>
              <div className="it-sv-details-sidebar-category mb-10">
                mobile application
                <span>
                  <i className="fa-light fa-angle-right" />
                </span>
              </div>
            </div>
            <div className="sidebar__widget mb-55">
              <div className="sidebar__widge-title-box">
                <h3 className="sidebar__widget-title pb-10">Recent Post</h3>
              </div>
              <div className="sidebar__widget-content">
                <div className="sidebar__post">
                  <div className="rc__post mb-30 d-flex align-items-start">
                    <div className="rc__post-thumb mr-20">
                      <a href="blog-details.html">
                        <img
                          src="assets/img/blog/blog-sidebar-sm-1.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="rc__post-content">
                      <div className="rc__meta">
                        <span>
                          <i className="fa-solid fa-calendar-days" />
                          14 June 2023
                        </span>
                      </div>
                      <h3 className="rc__post-title">
                        <a href="blog-details.html">
                          Interdum velit laoreet id donec ultrices tincidunt
                          arcu.
                        </a>
                      </h3>
                    </div>
                  </div>
                  <div className="rc__post mb-30 d-flex align-items-start">
                    <div className="rc__post-thumb mr-20">
                      <a href="blog-details.html">
                        <img
                          src="assets/img/blog/blog-sidebar-sm-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="rc__post-content">
                      <div className="rc__meta">
                        <span>
                          <i className="fa-solid fa-calendar-days" />
                          14 June 2023
                        </span>
                      </div>
                      <h3 className="rc__post-title">
                        <a href="blog-details.html">
                          Interdum velit laoreet id donec ultrices tincidunt
                          arcu.
                        </a>
                      </h3>
                    </div>
                  </div>
                  <div className="rc__post mb-30 d-flex align-items-start">
                    <div className="rc__post-thumb mr-20">
                      <a href="blog-details.html">
                        <img
                          src="assets/img/blog/blog-sidebar-sm-3.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="rc__post-content">
                      <div className="rc__meta">
                        <span>
                          <i className="fa-solid fa-calendar-days" />
                          14 June 2023
                        </span>
                      </div>
                      <h3 className="rc__post-title">
                        <a href="blog-details.html">
                          Interdum velit laoreet id donec ultrices tincidunt
                          arcu.
                        </a>
                      </h3>
                    </div>
                  </div>
                  <div className="rc__post mb-30 d-flex align-items-start">
                    <div className="rc__post-thumb mr-20">
                      <a href="blog-details.html">
                        <img
                          src="assets/img/blog/blog-sidebar-sm-4.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="rc__post-content">
                      <div className="rc__meta">
                        <span>
                          <i className="fa-solid fa-calendar-days" />
                          14 June 2023
                        </span>
                      </div>
                      <h3 className="rc__post-title">
                        <a href="blog-details.html">
                          Interdum velit laoreet id donec ultrices tincidunt
                          arcu.
                        </a>
                      </h3>
                    </div>
                  </div>
                  <div className="rc__post mb-30 d-flex align-items-start">
                    <div className="rc__post-thumb mr-20">
                      <a href="blog-details.html">
                        <img
                          src="assets/img/blog/blog-sidebar-sm-5.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="rc__post-content">
                      <div className="rc__meta">
                        <span>
                          <i className="fa-solid fa-calendar-days" />
                          14 June 2023
                        </span>
                      </div>
                      <h3 className="rc__post-title">
                        <a href="blog-details.html">
                          Interdum velit laoreet id donec ultrices tincidunt
                          arcu.
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="it-sv-details-sidebar-widget">
              <h4 className="it-sv-details-sidebar-title mb-30">
                popular tag:
              </h4>
              <div className="sidebar__widget-content">
                <div className="tagcloud">
                  <a href="#"> Balance</a>
                  <a href="#">coaching</a>
                  <a href="#">Motivation</a>
                  <a href="#">courses</a>
                  <a href="#">Life guide</a>
                  <a href="#">strategy</a>
                  <a href="#">Education</a>
                  <a href="#">coach</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div className="it-pagination">
            <nav>
              <ul>
                <li>
                  <a href="https://ordainit.com/">1</a>
                </li>
                <li>
                  <a href="https://ordainit.com/">2</a>
                </li>
                <li>
                  <a href="https://ordainit.com/">3</a>
                </li>
                <li>
                  <a className="color" href="https://ordainit.com/">
                    <i className="fa-solid fa-arrow-right-long" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>


        
      </div>
    )
  }
}
