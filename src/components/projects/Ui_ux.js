import React, { Component } from 'react';


export default class Ui_ux extends Component {
    render() {
        return (
            <div>
                {/* Content Start */}
                <section className="p_info" style={{ backgroundColor: '#EBEEF6' }}>
                    <div className="container" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                        <div className="ui-btn" style={{ color: '#4a77f1' }}>
                            <h2>
                                {/* <i class="fab fa-react"></i> */}
                                Web / App Design ( User Interface )</h2>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                            <p>
                                The new era of design has come! You might think of some interior or clothes when hearing the word
                                ‘design’, but
                                today most of the things this word applies to are located in the virtual space. Design defines the
                                success of
                                most software products. And software development discovers new ways to use the design for various
                                products. We
                                talk about design for websites and applications!
                            </p>
                            <p>
                                There is no great app without stylish elements and usability. The effectiveness of the application
                                is
                                measured
                                by the optimum combination of functionality and attractiveness. Visual communication with your
                                customers
                                must be
                                simple, intuitive and engaging.
                            </p>
                            <div className="ui-btn" style={{ color: '#4a77f1', margin: '30px 0 0 0' }}>
                                <h2> User Experience ( UX ) </h2>
                            </div>
                            <p>
                                UX (User Experience) design is the process of creating products, systems or services that
                                provide meaningful and relevant experiences to users. This involves the design of the entire process of acquiring and
                                integrating the product, including aspects of branding, design, usability, and function. It also includes
                                meaningful and valuable aspects of human-computer interaction and product ownership. UX handles the
                                architecture of the content and the sitemap. As a spoiler, we’d like to say that UI (User Interface) design, we’ll talk about in the next
                                part, is an important aspect of UX design, it is a subset of it. Because UX design covers a vast array of
                                other areas. Information Architecture (IA) is the second most viable aspect of UX design.</p>
                            <p>
                                The main task of UX design is to create products which can be tailored to meet a user’s specific
                                needs, but which
                                provides functionality that is predictable. In other words, UX Design is to study user behavior
                                and
                                understand
                                user motivations with the goal to design better digital experiences.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="project" style={{ backgroundColor: '#EBEEF6' }}>
                    <div className="container" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                        <div className="ui-btn" style={{ color: '#4a77f1' }}>
                            <h2>Projects</h2>
                        </div>
                        <div className="project-inner">
                            <div className="pr-1">
                                <div className="pr-img">
                                    <img src={process.env.PUBLIC_URL + "/img/Home_with_vector_design.png"} alt="" />
                                </div>
                                <div className="pr-text">
                                    <h2>IT Company One Page Vector Design</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem magni minima recusandae
                                      placeat, ratione corporis fugit cupiditate dignissimos reprehenderit aperiam hic eius at aut
                                      architecto fuga repellendus incidunt doloribus magnam.
                                    </p>
                                    <a href={process.env.PUBLIC_URL + "/img/Home_with_vector_design.png"} className="pr-btn">View --</a>
                                </div>
                            </div>
                            <div className="pr-1">
                                <div className="pr-img">
                                    <img src={process.env.PUBLIC_URL + "/img/Home_with_image_design.png"} alt="" />
                                </div>
                                <div className="pr-text">
                                    <h2 style={{ color: '#00BCD5' }}>IT Company One Page image Design</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem magni minima recusandae
                                      placeat, ratione corporis fugit cupiditate dignissimos reprehenderit aperiam hic eius at aut
                                      architecto fuga repellendus incidunt doloribus magnam.
                                    </p>
                                    <a href={process.env.PUBLIC_URL + "/img/Home_with_image_design.png"} className="pr-btn" style={{ color: '#00BCD5' }}>View --</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}
