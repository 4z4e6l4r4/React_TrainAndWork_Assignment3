import React, { Component } from "react";

export default class Statistics extends Component {
  render() {
    return (
      <div>
        <div className="it-funfact-area z-index-5">
          <div className="container">
            <div
              className="it-funfact-bg-wrap theme-bg"
              data-background="assets/img/funfact/funfact-bg.png"
            >
              <div className="row gx-0">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="it-funfact-item d-flex align-items-center">
                    <div className="it-funfact-icon">
                      <span>
                        <i className="flaticon-teacher" />
                      </span>
                    </div>
                    <div className="it-funfact-content">
                      <h6>
                        <i
                          className="purecounter"
                          data-purecounter-duration={1}
                          data-purecounter-end={3}
                        >
                          12
                        </i>
                        k+
                      </h6>
                      <span>Successfully Trained</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="it-funfact-item d-flex align-items-center">
                    <div className="it-funfact-icon">
                      <span>
                        <i className="flaticon-completed-task" />
                      </span>
                    </div>
                    <div className="it-funfact-content">
                      <h6>
                        <i
                          className="purecounter"
                          data-purecounter-duration={1}
                          data-purecounter-end={15}
                        >
                          20
                        </i>
                        k+
                      </h6>
                      <span>Classes Completed</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="it-funfact-item d-flex align-items-center">
                    <div className="it-funfact-icon">
                      <span>
                        <i className="flaticon-customer-review" />
                      </span>
                    </div>
                    <div className="it-funfact-content">
                      <h6>
                        <i
                          className="purecounter"
                          data-purecounter-duration={1}
                          data-purecounter-end={97}
                        />
                        345k+
                      </h6>
                      <span>Satisfaction Rate</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="it-funfact-item d-flex align-items-center">
                    <div className="it-funfact-icon">
                      <span>
                        <i className="flaticon-class" />
                      </span>
                    </div>
                    <div className="it-funfact-content">
                      <h6>
                        <i
                          className="purecounter"
                          data-purecounter-duration={1}
                          data-purecounter-end={102}
                        />
                        198k+
                      </h6>
                      <span>Students Community</span>
                    </div>
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
