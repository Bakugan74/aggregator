// Whatever you render out in the Slider will be draggable 'slides'
import React, { Component } from "react";
import Carousel from "react-simply-carousel";
import s from "./carousel.module.css";

class Courusel extends Component {
    state = {
        activeSlideIndex: 0,
        hideNavIfAllVisible: false,
        infinite: true,
        autoplayDirection: 'forward'
    };

    setActiveSlideIndex = (newActiveSlideIndex) => {
        this.setState({
            activeSlideIndex: newActiveSlideIndex,
        });
    };

    render() {
        return (
            <Carousel
                activeSlideIndex={this.state.activeSlideIndex}
                hideNavIfAllVisible={this.state.hideNavIfAllVisible}
                onRequestChange={this.setActiveSlideIndex}
                itemsToShow={1}
                itemsToScroll={1}
                swipeTreshold={80}
                speed={500}
                forwardBtnProps={{
                    style: {
                        display: "none"
                    }
                }}
                backwardBtnProps={{
                    style: {
                        display: "none"
                    }
                }}
                dotsNav={{
                    show: true,
                    itemBtnProps: {
                        style: {
                            height: 2,
                            width: 30,
                            // borderRadius: "50%",
                            border: 10,
                            margin: 4,
                            opacity: 1
                        }
                    },
                    activeItemBtnProps: {
                        style: {
                            height: 2,
                            width: 30,
                            // borderRadius: "50%",
                            border: 0,
                            background: "rgba(75, 100, 189, 1)",
                            margin: 4,
                            opacity: 1
                        }
                    }
                }}
            >
                <div className={s.slide1}>
                    <div className={s.slide_info}>
                        <p>Сомневаетесь, что потратите деньги и не понравится <b>новая внешность?</b></p>
                    </div>
                    <div className={s.AI_text}>
                        <p>Искусственный интеллект поможет Вам, просто загрузите свою фотографию и посмотрите на нового себя!</p>
                    </div>
                    <div className={s.button_item} id='surname'>
                        <p>Попробовать</p>
                    </div>
                </div>
                <div className={s.slide1}>
                    <div className={s.slide_info}>
                    <p>Сомневаетесь, что потратите деньгии не понравится <b>новая внешность?</b></p>
                    </div>
                    <div className={s.AI_text}>
                        <p>Искусственный интеллект поможет Вам, просто загрузите свою фотографию и посмотрите на нового себя!</p>
                    </div>
                    <div className={s.button_item} id='surname'>
                        <p>Попробовать</p>
                    </div>
                </div>
                <div className={s.slide1}>
                    <div className={s.slide_info}>
                    <p>Сомневаетесь, что потратите деньгии не понравится <b>новая внешность?</b></p>
                    </div>
                    <div className={s.AI_text}>
                        <p>Искусственный интеллект поможет Вам, просто загрузите свою фотографию и посмотрите на нового себя!</p>
                    </div>
                    <div className={s.button_item} id='surname'>
                        <p>Попробовать</p>
                    </div>
                </div>
            </Carousel>
        );
    }
}

export default Courusel;
