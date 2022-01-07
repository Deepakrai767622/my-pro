import React, { Component } from 'react'

export default class Jquery extends Component {
    render() {
        return (
            <div>
                {/* Content Start */}
                <section className="p_info" style={{ backgroundColor: '#F9EBEB' }}>
                    <div className="container" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                        <div className="ui-btn" style={{ color: '#F23B8A' }}>
                            <h2>
                                JQUERY
                            </h2>
                        </div>
                        <div>
                            <p>
                                jQuery is the most popular JavaScript library today, in use by over 60% of the top 100,000 most
                                visited websites. This course will teach you how to use jQuery’s core features - DOM element
                                selections, traversal and manipulation.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="project" style={{ backgroundColor: '#F9EBEB' }}>
                    <div className=" container" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                        <div className="ui-btn" style={{ color: '#F23B8A' }}>
                            {/* <h2>Projects</h2> */}
                            <h2>Coming Soon</h2>
                        </div>
                        <div className="project-inner" style={{ display: 'none' }}>
                            <div className="pr-1">
                                <div className="pr-img">
                                    <img src="../../img/gihub.jpg" alt="" />
                                </div>
                                <div className="pr-text">
                                    <h2>GitHub Finder Web App</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem magni minima recusandae
                                      placeat, ratione corporis fugit cupiditate dignissimos reprehenderit aperiam hic eius at aut
                                      architecto fuga repellendus incidunt doloribus magnam.
                                    </p>
                                    <a href className="pr-btn">View Live --</a>
                                </div>
                            </div>
                            <div className="pr-1">
                                <div className="pr-img">
                                    <img src="../../img//email.jpg" alt="" />
                                </div>
                                <div className="pr-text">
                                    <h2 style={{ color: '#00BCD5' }}>Email form with Step</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem magni minima recusandae
                                      placeat, ratione corporis fugit cupiditate dignissimos reprehenderit aperiam hic eius at aut
                                      architecto fuga repellendus incidunt doloribus magnam.
                                    </p>
                                    <a href className="pr-btn" style={{ color: '#00BCD5' }}>View Live --</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}
