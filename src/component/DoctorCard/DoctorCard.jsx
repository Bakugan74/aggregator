import React, { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./DoctorCard.module.css"
import Rating from './Rating/Rating'; 
import Doctor from '../../img/Rectangle.png'

const DoctorCard = (props) => {
    const sliderRef = useRef();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const handlePrevSlide = () => {
        sliderRef.current.slickPrev();
    };

    const handleNextSlide = () => {
        sliderRef.current.slickNext();
    };

    return (
        <div className={style.doctor_card}>
            <div className={style.doctor_info}>
                <img src={Doctor} alt="Docto" />
                <div className={style.doctor_rating}>
                        <Rating rating={5} />
                        <span>100 отзывов</span>
                </div>
                <h3>ФИО {props.name}</h3>
                <p>Стаж: 10 лет</p>
                <p>Категория: Врач-специалист</p>
                <div className={style.reviews_slider}>
                    <div className={style.slider_controls}>
                        <div className={style.reviews_slider}>
                        <button className={style.next_review} onClick={handlePrevSlide}></button>
                            <Slider ref={sliderRef} {...settings}>
                                <div>
                                    <p>Отзыв 1: Текст отзыва 1</p>
                                </div>
                                <div>
                                    <p>Отзыв 2: Текст отзыва 2</p>
                                </div>
                                <div>
                                    <p>Отзыв 2: Текст отзыва 2</p>
                                </div>
                            </Slider>
                        </div>
                        <button className={style.next_review} onClick={handleNextSlide}></button>
                    </div>
                </div>
            </div>
            <div className={style.clinic_info}>
            </div>
            <p>Телефон врача: +7-XXX-XXX-XXXX</p>
        </div>
    );
};

export default DoctorCard;
