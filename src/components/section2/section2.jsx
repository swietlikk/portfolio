import React, { useState } from 'react';
import './Section2.scss';
import { Link, animateScroll as scroll } from 'react-scroll';

function Section2() {
    return (
        <section className="about__section">
            <div className="about__container">
                <div className="frame__container">
                    <div className="image__frame">
                        </div>
                    <div className="image__photo">
                        </div>
                </div>
                    <div className="items">
                    <h2 className="headline item__hdl">About Me
                        </h2>
                    <div className="item__underscore">
                        </div>
                    <p className="item__dsc">I am a user and motivated entry-level Frontend Developer,
                        ready to start a career in the IT industry. Having a solid
                        programming foundation from my education and my
                        own learning. I'm looking for a first build to get hands-on
                        experience and carry it out as a front-end specialist.
                        </p>
                    <p className="item__dsc description">My passion lies in crafting seamless and visually appealing user experiences,
                        and I am committed to continuous learning and growth as a front-end specialist.
                        Let's build something extraordinary together!
                        </p>
                        <div className="btn__container">
                            <Link to="contact__hdl__text" spy={true} smooth={true} offset={-80} duration={500} className="btn about__btn">
                                HIRE ME
                            </Link>
                    <a className="btn download__btn" href="../../files/adamos.swietlicki@gmail.com%20(1).pdf" download="AdamŚwietlicki_CV">DOWNLOAD CV</a>
                    </div>
                        <div className="frame__container__mobile">
                            <div className="image__frame__mobile">
                            </div>
                            <div className="image__photo__mobile">
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    );
}

export default Section2;