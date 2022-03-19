import React from 'react';
import './homepage.css'
const HomeScreen = () => {
    return (
        <div className="home-page flex-col-hstart-vstart clip-contents">
            <div className="line-3" />
            <div className="group-3108 flex-col-hend">
                <nav className="nav">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/jmm5np8m0fo-234%3A2?alt=media&token=98cee229-2d6b-4b09-8af4-1915dfacf494"
                        alt="Logo image"
                        className="portfolio-_logo-1"
                    />
                    <ul>
                        <li><a className="workLink">WORK</a></li >
                        <li><a className="buttontext">ABOUT ME</a></li>
                        <li><a className="buttontext">SKILLS</a></li>
                        <li><a className="buttontext">GET IN TOUCH</a></li>
                    </ul>
                </nav>
                <div className="wrapper">
                        <div className="herotextwrapper">
                            <div className="line-1" />
                            <text className="herotext">
                                Hi All, I Am <br/>
                                <span className="bluetext">Nathan Brathwaite</span>
                            </text>
                        </div>
                        <ul className="socialLinks">
                            <li className="sociallinktext">
                                Linkedin
                            </li >
                            <li className="sociallinktext">
                                Github
                            </li>
                            <li className="sociallinktext">
                                Instagram
                            </li>
                        </ul>
                        <p className="scrolltext">Scroll for more</p>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen;