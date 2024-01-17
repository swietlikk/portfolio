import React, { useState } from 'react';
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
                        <a href="" className="navigation__item navigation__item--active">
                            <span className="navigation__highlight">ABOUT ME</span>
                        </a>
                        <a href="" className="navigation__item">
                            <span className="navigation__highlight">PROJECTS</span>
                        </a>
                        <a href="" className="navigation__item">
                            <span className="navigation__highlight">CONTACT</span>
                        </a>
                    </nav>
                    {isNavVisible && (
                        <div className="hamburger__elements">
                            <div className="hamburger__element">About Me</div>
                            <div className="hamburger__element">Projects</div>
                            <div className="hamburger__element">Contact</div>
                        </div>
                    )}
                </div>
            </header>

            <div className="intro">
                <h2 className="intro__hdl">Hello</h2>
                <h1 className="intro__name">I'm Adam</h1>
                <p className="intro__dsc">FRONT END DEVELOPER</p>
                <a href="" className="intro__btn btn">HIRE ME</a>
            </div>

            <div className="image">
                <img src="../../../src/images/photo-of-me.png" alt="" className="image__img" />
            </div>
        </section>
    );
}

export default Section1;