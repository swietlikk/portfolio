import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './Section1.scss';

function Section1() {
    const [isNavVisible, setNavVisibility] = useState(false);

    const toggleNavVisibility = () => {
        setNavVisibility(!isNavVisible);
    };

    return (
        <section className="open__section">
            <div className="background-color"></div>
            <header className="header">
                <div className="header__inner">
                    <div className="logo__names">
                        <a href="" className="logo logo__name">Adam</a>
                        <a href="" className="logo logo__surname">Świetlicki</a>
                    </div>
                    <input
                        type="checkbox"
                        className="hamburger__select"
                        id="hamburgerCheckbox"
                        checked={isNavVisible}
                        onChange={toggleNavVisibility}
                    />
                    <div className="hamburger">
                        <label htmlFor="hamburgerCheckbox" className="hamburger__icon"></label>
                        <label htmlFor="hamburgerCheckbox" className="hamburger__icon"></label>
                        <label htmlFor="hamburgerCheckbox" className="hamburger__icon"></label>
                    </div>
                    <nav className={`navigation ${isNavVisible ? 'visible' : ''}`}>
                        <Link to="headline item__hdl" spy={true} smooth={true} offset={-80} duration={500} className="navigation__item navigation__item--active">
                            <span className="navigation__highlight">ABOUT ME</span>
                        </Link>
                        <Link to="projects__hdl__text" spy={true} smooth={true} offset={-80} duration={500} className="navigation__item">
                            <span className="navigation__highlight">PROJECTS</span>
                        </Link>
                        <Link to="contact__hdl__text" spy={true} smooth={true} offset={-80} duration={500} className="navigation__item">
                            <span className="navigation__highlight">CONTACT</span>
                        </Link>
                    </nav>
                    {isNavVisible && (
                        <div className="hamburger__elements">
                            <Link to="headline item__hdl" spy={true} smooth={true} offset={-80} duration={500} className="hamburger__element">
                                About Me
                            </Link>
                            <Link to="projects__hdl__text" spy={true} smooth={true} offset={-80} duration={500} className="hamburger__element">
                                Projects
                            </Link>
                            <Link to="contact__hdl__text" spy={true} smooth={true} offset={-80} duration={500} className="hamburger__element">
                                Contact
                            </Link>
                        </div>
                    )}
                </div>
            </header>

            <div className="intro">
                <h2 className="intro__hdl">Hello</h2>
                <h1 className="intro__name">I'm Adam</h1>
                <p className="intro__dsc">FRONT END DEVELOPER</p>
                <Link to="contact__hdl__text" spy={true} smooth={true} offset={-80} duration={500} className="intro__btn btn">
                    HIRE ME
                </Link>
            </div>

            <div className="image">
                <div className="image__img"></div>
            </div>
        </section>
    );
}

export default Section1;
