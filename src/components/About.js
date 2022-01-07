import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* Content Start */}
        <section className='p_info' style={{ backgroundColor: "#FFEBF4" }}>
          <div
            className='container'
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}>
            <div className='ui-btn' style={{ color: "#FF5BDE" }}>
              <h2>
                {/* <i class="fab fa-react"></i> */}
                About me
              </h2>
            </div>
            <p style={{ width: 800, textAlign: "center" }}>
              Create usable, Responsive interface design using HTML5/CSS3,
              Bootstrap, WordPress, which is nice to look and easy to use.
            </p>
            <div className='about-inner'>
              <div>
                <div className='about-img'>
                  <img src={process.env.PUBLIC_URL + "/img/logo.svg"} alt='' />
                </div>
              </div>
              <div className='about-list'>
                <div>
                  <span>Name:</span>
                  <span>Deepak Rai</span>
                </div>
                <div>
                  <span>Email:</span>
                  <span>Deepakrai767622@gmail.com</span>
                </div>
                <div>
                  <span>Phone:</span>
                  <span>9984576565</span>
                </div>
                <div>
                  <span>Date Of Birth:</span>
                  <span>10 July 1993</span>
                </div>
                <div>
                  <span>Address:</span>
                  <span>Vadodara, Gujrat, India</span>
                </div>
                <div>
                  <span>Experience:</span>
                  <span>2 Years</span>
                </div>
                <div>
                  <span>About my self:</span>
                  <span>
                    I am a Creative Web Designer & Front-End Developer in
                    Vadodara, India. An expert in all aspects of website design.
                    I have more than 2 years of professional experience in
                    creative design and Development.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
