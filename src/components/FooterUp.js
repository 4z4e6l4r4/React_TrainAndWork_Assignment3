import React, { Component } from 'react'

export default class FooterUp extends Component {
  render() {
    return (
      <div>
        <div className="it-newsletter-area it-newsletter-height fix p-relative theme-bg">
  <div className="it-newsletter-shape-1 d-none d-lg-block">
    <img src="assets/img/newsletter/shape-1-1.png" alt="" />
  </div>
  <div className="it-newsletter-shape-2 d-none d-lg-block">
    <img src="assets/img/newsletter/shape-1-2.png" alt="" />
  </div>
  <div className="it-newsletter-shape-3 d-none d-xl-block">
    <img src="assets/img/newsletter/shape-1-3.png" alt="" />
  </div>
  <div className="it-newsletter-shape-4 d-none d-xl-block">
    <img src="assets/img/newsletter/shape-1-4.png" alt="" />
  </div>
  <div className="container">
    <div className="row">
      <div className="col-xl-6 col-lg-6 col-md-6">
        <div className="it-newsletter-left">
          <h4 className="it-section-title text-white pb-20">
            Join Our Newsletter
          </h4>
          <span>
            Subscribe our newsletter to get our latest update &amp; news.
          </span>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6">
        <div className="it-newsletter-right p-relative text-end">
          <input type="text" placeholder="Enter your email:" />
          <button className="it-btn black-bg" type="submit">
            <span>subscribe now</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    )
  }
}
