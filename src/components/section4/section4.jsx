import React from 'react';
import './Section4.scss';

function Section4() {

    return (
        <section className="contact">
            <div className="contact__hdl">
                <h3 className="contact__hdl__text">Contact</h3>
                <div className="contact__underscore"></div>
            </div>
            <div className="container__contact">
                <div className="box__contact">
                    <div>
                        <div className="box__contact__content">
                            <a className="contact__img email__img"></a>
                            <h2 className="contact__title">E-mail</h2>
                        </div>
                    <div className="box__contact__text">
                        <p className="contact__text">adamos.swietlicki@gmail.com</p>
                    </div>
                    </div>

                    <div>
                        <div className="box__contact__content">
                            <a className="contact__img telephone__img"></a>
                            <h2 className="contact__title">Telephone number</h2>
                        </div>
                        <div className="box__contact__text">
                            <p className="contact__text">+48 504 987 171</p>
                        </div>
                    </div>

                    <div>
                        <div className="box__contact__content">
                            <a className="contact__img media__img"></a>
                            <h2 className="contact__title">Social media</h2>
                        </div>
                        <div className="box__contact__text">
                            <a target="_blank" href="https://www.linkedin.com/in/adam-%C5%9Bwietlicki-123777294/" alt="" className="socials__img"> </a>
                            <a  target="_blank" href="https://github.com/swietlikk" alt="" className="socials__img"> </a>
                            <a  target="_blank" href="https://github.com/swietlikk" alt="" className="socials__img"> </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section4;
