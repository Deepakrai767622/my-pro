import React, { Component } from 'react';

export default class Front extends Component {
    render() {
        return (
            <div>
                {/* Content Start */}
                <section className="p_info" style={{ backgroundColor: '#EDF1ED' }}>
                    <div className="container" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                        <div className="ui-btn" style={{ color: '#57AE57' }}>
                            <h2>
                                {/* <i class="fab fa-react"></i> */}
                                Front End development</h2>
                        </div>
                        <div>
                            <p>
                                A front-end developer links together the world of design and technology, packaging up the utility of
                                the back
                                end in an inviting way for users to interact with. They take website design files and convert them
                                into HTML,
                                JavaScript (JS) and/or CSS code - the core elements of front-end development. This includes
                                design/layout,
                                content, buttons, images, navigation, and internal links.
                            </p>
                            <p>
                                Everything a user sees, clicks, or uses to input or retrieve information on a website is the work of
                                a front-end
                                developer. This takes being both creative and tech-savvy. Their focus is on user experience, and the
                                technology
                                they implement hinges on how well it will accomplish that efficiency, speed, and smooth
                                functionality. They also
                                make sure that there are no errors or bugs on the front end, and that the design appears as it’s
                                supposed to
                                across various platforms and browsers.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="project" style={{ backgroundColor: '#EDF1ED' }}>
                    <div className="container" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                        <div className="ui-btn" style={{ color: '#57AE57' }}>
                            <h2>Projects</h2>
                        </div>
                        <div className="project-inner">
                            <div className="pr-1">
                                <div className="pr-img">
                                    <img src="/img/front-photography.jpg" alt="" />
                                </div>
                                <div className="pr-text">
                                    <h2>Front End Photography Website</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem magni minima recusandae
                                      placeat, ratione corporis fugit cupiditate dignissimos reprehenderit aperiam hic eius at aut
                                      architecto fuga repellendus incidunt doloribus magnam.
                                    </p>
                                    <a href="https://photography767622.netlify.com/" className="pr-btn">View Live --</a>
                                </div>
                            </div>
                            <div className="pr-1">
                                <div className="pr-img">
                                    <img src="/img/front-travell.jpg" alt="" />
                                </div>
                                <div className="pr-text">
                                    <h2 style={{ color: '#00BCD5' }}>Email form with Step</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem magni minima recusandae
                                      placeat, ratione corporis fugit cupiditate dignissimos reprehenderit aperiam hic eius at aut
                                      architecto fuga repellendus incidunt doloribus magnam.
                                    </p>
                                    <a href="/p_page/front_end/travel_venue/" className="pr-btn" style={{ color: '#00BCD5' }}>View Liv--  </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}
