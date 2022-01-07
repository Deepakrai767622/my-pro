import React, { Component } from "react";

export default class Wireframe extends Component {
  render() {
    return (
      <div>
        {/* Content Start */}
        <section className='p_info' style={{ backgroundColor: "#F1EBF6" }}>
          <div
            className='container'
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}>
            <div className='ui-btn' style={{ color: "#A851F1" }}>
              <h2>Wireframe</h2>
            </div>
            <div>
              <p>
                In 4th BC Plato said: “The beginning is the most important part
                of the work”. Almost 24 centuries since then his words are still
                up-to-date in our realias. Buildings require a stable foundation
                to stand and give shelter for long as well as any project needs
                to be well-planned from the very beginning to avoid problems at
                the further stages. Wireframing is the early step of UI/UX
                design process when the structure of the project is being
                formed. The usability and efficiency of final product often
                depend on how well the wireframe is created at the very first
                steps of the design process. However, today designers still
                haven’t agreed upon the common opinion about wireframing: some
                of them consider it to be a key part of the design process while
                the others regard wireframing as the waste of time. But where
                does the truth lie?
              </p>
            </div>
          </div>
        </section>
        <section className='project' style={{ backgroundColor: "#F1EBF6" }}>
          <div
            className=' container'
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}>
            <div className='ui-btn'>
              <h2>Projects</h2>
            </div>
            <div className='project-inner'>
              <div className='pr-1'>
                <div className='pr-img' style={{ color: "#A851F1" }}>
                  <img
                    src={process.env.PUBLIC_URL + "/img/wireframe.png"}
                    alt=''
                  />
                </div>
                <div className='pr-text'>
                  <h2>I.T. company Wireframe</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Rem magni minima recusandae placeat, ratione corporis fugit
                    cupiditate dignissimos reprehenderit aperiam hic eius at aut
                    architecto fuga repellendus incidunt doloribus magnam.
                  </p>
                  <a
                    href='../../p_page/wireframe/wireframe.png'
                    className='pr-btn'>
                    View --
                  </a>
                </div>
              </div>
              <div className='pr-1' style={{ display: "none" }}>
                <div className='pr-img'>
                  <img src='../../img/email.jpg' alt='' />
                </div>
                <div className='pr-text'>
                  <h2 style={{ color: "#00BCD5" }}>Email form with Step</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Rem magni minima recusandae placeat, ratione corporis fugit
                    cupiditate dignissimos reprehenderit aperiam hic eius at aut
                    architecto fuga repellendus incidunt doloribus magnam.
                  </p>
                  <a href='' className='pr-btn' style={{ color: "#00BCD5" }}>
                    View Live --
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
