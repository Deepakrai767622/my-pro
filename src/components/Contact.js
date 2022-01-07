import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div>
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
                Contact Me
              </h2>
            </div>
            <p style={{ width: 800, textAlign: "center" }}>
              Create usable, Responsive interface design using HTML5/CSS3,
              Bootstrap, WordPress, which is nice to look and easy to use.
            </p>
            <div className='contact-inner'>
              <div className='container-1'>
                <form id='contact' action method='post'>
                  <h4>I will reach out to you soon</h4>
                  <fieldset>
                    <input
                      placeholder='Your name'
                      type='text'
                      tabIndex={1}
                      required
                    />
                  </fieldset>
                  <fieldset>
                    <input
                      placeholder='Email Address'
                      type='email'
                      tabIndex={2}
                      required
                    />
                  </fieldset>
                  <fieldset>
                    <input
                      placeholder='Phone Number'
                      type='tel'
                      tabIndex={3}
                      required
                    />
                  </fieldset>
                  <fieldset>
                    <textarea
                      placeholder='Type your message here...'
                      tabIndex={4}
                      required
                      defaultValue={""}
                    />
                  </fieldset>
                  <fieldset>
                    <button
                      name='submit'
                      type='submit'
                      id='contact-submit'
                      data-submit='...Sending'>
                      Submit
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
