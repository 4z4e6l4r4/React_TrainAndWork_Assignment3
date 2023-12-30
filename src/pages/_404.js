import React, { Component } from 'react'
import FooterUp from '../components/FooterUp'
import { Link } from 'react-router-dom'

export default class _404 extends Component {
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
              <h3 className="it-breadcrumb-title">404 page</h3>
            </div>
            <div className="it-breadcrumb-list-wrap">
              <div className="it-breadcrumb-list">
                <span>
                  <a href="index.html">home</a>
                </span>
                <span className="dvdr">//</span>
                <span>pages</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="it-error-area pt-120 pb-120">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xl-6 col-lg-6 order-1 order-lg-0">
          <div
            className="it-error-content wow itfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".3s"
          >
            <h5 className="it-error-title">Sorry, Page Not Found!</h5>
            <p className="mb-35">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link className="it-btn" to="/">
              <span>
                Back To Home
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
        <div className="col-xl-6 col-lg-6 order-0 order-lg-1">
          <div className="it-error-thumb">
            <img src="assets/img/error/error.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>

 <FooterUp/>


      </div>
    )
  }
}
