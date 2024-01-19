import React, { useEffect, useRef } from 'react';
import './Section3.scss';
import $ from 'jquery';

function Section3() {
    const sliderRef = useRef(null);

    useEffect(() => {
        $('.arrow-next').click(function () {
            handleSlideChange('next');
        });

        $('.arrow-prev').click(function () {
            handleSlideChange('prev');
        });

        $(window).on('load resize', function () {
            adjustSliderHeight();
        });

        const handleSlideChange = (direction) => {
            const currentSlide = $('.card.active-slide');
            const slides = $('.card');
            const currentDot = $('.active-dot');
            const dots = $('.dot');
            let nextSlide, nextDot;

            if (direction === 'next') {
                nextSlide = currentSlide.next();
                nextDot = currentDot.next();
            } else if (direction === 'prev') {
                nextSlide = currentSlide.prev();
                nextDot = currentDot.prev();
            }

            if (nextSlide.length === 0) {
                nextSlide = slides.first();
                nextDot = dots.first();
            }

            currentSlide.fadeOut(10).removeClass('active-slide');
            nextSlide.fadeIn(10).addClass('active-slide');

            currentDot.removeClass('active-dot');
            nextDot.addClass('active-dot');
        };

        const adjustSliderHeight = () => {
            const x = $('.active-slide img').height() + 'px';
            $('.card__container').css('min-height', x);
        };
    }, []);

    return (
        <section className="projects">
            <div className="projects__hdl">
                <h3 className="projects__hdl__text">Latest Projects</h3>
                <div className="projects__underscore"></div>
            </div>
            <div className="card__projects">
                <div className="card__container">
                    <div className="card active-slide">
                        <div className="content">
                            <h2 className="title">Todo app</h2>
                            <p className="copy">Todo_app typically refers to a to-do list application, which is a common project for learning and practicing web development. In such an application, users can add, edit, and remove tasks from a list.</p>
                            <a className="btn__card" target="_blank" href="https://github.com/swietlikk">MORE</a>
                        </div>
                    </div>

                    <div className="card">
                        <div className="content">
                            <h2 className="title">Plan your day</h2>
                            <p className="copy">This app is a simple task management application developed using React. It provides basic functionality for adding, editing, and deleting tasks. Additionally, it offers analyzing the time spent on different task.</p>
                            <a className="btn__card" target="_blank" href="https://github.com/swietlikk">MORE</a>
                        </div>
                    </div>

                    <div className="card">
                        <div className="content">
                            <h2 className="title">Bestshop RWD</h2>
                            <p className="copy">BestShop RWD is a website project designed for various devices, including computers and mobile phones. The project was developed as part of learning and practical experience in front-end development.</p>
                            <a className="btn__card" target="_blank" href="https://github.com/swietlikk">MORE</a>
                        </div>
                    </div>
                </div>
                <div className="card__btn__box">
                     <span className="slider-nav">
        <span className="arrow-prev"></span>
        <ul className="slider-dots"></ul>
        <span className="arrow-next"></span>
            </span>
                    <a className="btn card__btn" target="_blank" href="https://github.com/swietlikk">
                        MORE
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Section3;
