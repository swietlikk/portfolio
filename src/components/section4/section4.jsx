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
                            <img src="../../../src/images/email.png" alt="" className="contact__img" />
                            <h2 className="contact__title">E-mail</h2>
                        </div>
                    <div className="box__contact__text">
                        <p className="contact__text">adamos.swietlicki@gmail.com</p>
                    </div>
                    </div>

                    <div>
                        <div className="box__contact__content">
                            <img src="../../../src/images/telephone.png" alt="" className="contact__img" />
                            <h2 className="contact__title">Telephone number</h2>
                        </div>
                        <div className="box__contact__text">
                            <p className="contact__text">+48 504 987 171</p>
                        </div>
                    </div>

                    <div>
                        <div className="box__contact__content">
                            <img src="../../../src/images/share.png" alt="" className="contact__img" />
                            <h2 className="contact__title">Social media</h2>
                        </div>
                        <div className="box__contact__text">
                            <img src="../../../src/images/linkedin.png" alt="" className="socials__img" />
                            <img src="../../../src/images/github.png" alt="" className="socials__img" />
                            <img src="../../../src/images/instagram.png" alt="" className="socials__img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section4;
