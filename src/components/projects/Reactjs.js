import React, { Component } from 'react';

export default class Reactjs extends Component {
    render() {
        return (
            <div>
                {/* Content Start */}
                <section className="p_info" style={{ backgroundColor: '#E3F9FF' }}>
                    <div className="container" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                        <div className="ui-btn" style={{ color: '#1ACEFF' }}>
                            <h2>
                                <i className="fab fa-react" />
                                React
                            </h2>
                        </div>
                        <div>
                            <p>
                                React is an open-source JavaScript library that is used for building user interfaces specifically
                                for
                                single-page
                                applications. It’s used for handling the view layer for web and mobile apps. React also allows us to
                                create
                                reusable
                                UI components. React was first created by Jordan Walke, a software engineer working for Facebook.
                                React first
                                deployed on Facebook’s news feed in 2011 and on Instagram.com in 2012.
                            </p>
                            <p>
                                React allows developers to create large web applications that can change data, without reloading the
                                page. The
                                main purpose of React is to be fast, scalable, and simple. It works only on user interfaces in the
                                application.
                                This corresponds to the view in the MVC template. It can be used with a combination of other
                                JavaScript
                                libraries or frameworks, such as Angular JS in MVC.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="project" style={{ backgroundColor: '#E3F9FF' }}>
                    <div className="container" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                        <div className="ui-btn" style={{ color: '#1ACEFF' }}>
                            <h2>Projects</h2>
                        </div>
                        <div className="project-inner">
                            <div className="pr-1">
                                <div className="pr-img" style={{ color: '#1ACEFF' }}>
                                    <img src="../../img/gihub.jpg" alt="" />
                                </div>
                                <div className="pr-text">
                                    <h2>GitHub Finder Web App</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem magni minima recusandae
                                      placeat, ratione corporis fugit cupiditate dignissimos reprehenderit aperiam hic eius at aut
                                      architecto fuga repellendus incidunt doloribus magnam.
                                    </p>
                                    <a href="https://raiweb.netlify.com" className="pr-btn" target="blank">View Live --</a>
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
                                    <a href="https://react-form-raiweb.netlify.com" target="blank" className="pr-btn" style={{ color: '#00BCD5' }}> View Live--</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}
