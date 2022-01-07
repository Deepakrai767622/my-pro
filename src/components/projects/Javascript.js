import React, { Component } from 'react'

export default class Javascript extends Component {
    render() {
        return (
            <div>
                {/* Content Start */}
                <section className="p_info" style={{ backgroundColor: '#EDF1ED' }}>
                    <div className="container" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                        <div className="ui-btn" style={{ color: '#57AE57' }}>
                            <h2>
                                {/* <i class="fab fa-react"></i> */}
                                Modern Javascript (Vanilla JavaScript)</h2>
                        </div>
                        <div>
                            <p>
                                Modern JavaScript is a “safe” programming language. It does not provide low-level access to memory
                                or CPU, because it was initially created for browsers which do not require it.
                                 <br />
                                JavaScript’s capabilities greatly depend on the environment it’s running in. For instance, Node.js
                                supports functions that allow JavaScript to read/write arbitrary files, perform network requests,
                                etc.
                                 <br />

                                In-browser JavaScript can do everything related to webpage manipulation, interaction with the user,
                                and the webserver.
                            </p>

                            <p>

                                JavaScript was initially created as a browser-only language, but is now used in many other
                                environments as well.
                                <br />
                                Today, JavaScript has a unique position as the most widely-adopted browser language with full
                                integration with HTML/CSS.
                                <br />
                                There are many languages that get “transpiled” to JavaScript and provide certain features. It is
                                recommended to take a look at them, at least briefly, after mastering JavaScript.

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
                                    <img src="../../img/vanilla-exchange.jpg" alt="" />
                                </div>
                                <div className="pr-text">
                                    <h2>Registration page with validation</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem magni minima recusandae
                                      placeat, ratione corporis fugit cupiditate dignissimos reprehenderit aperiam hic eius at aut
                                      architecto fuga repellendus incidunt doloribus magnam.
                                    </p>
                                    <a href="../../p_page/vanilla_javascript/project1/" className="pr-btn">View Live --</a>
                                </div>
                            </div>
                            <div className="pr-1">
                                <div className="pr-img">
                                    <img src="../../img/vanilla-email.jpg" alt="" />
                                </div>
                                <div className="pr-text">
                                    <h2 style={{ color: '#00BCD5' }}>Exchange Rage Calculator</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem magni minima recusandae
                                      placeat, ratione corporis fugit cupiditate dignissimos reprehenderit aperiam hic eius at aut
                                      architecto fuga repellendus incidunt doloribus magnam.
                                    </p>
                                    <a href="../../p_page/vanilla_javascript/project4/" className="pr-btn" style={{ color: '#00BCD5' }}>View Live--</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}
