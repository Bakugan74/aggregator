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
                    style:{
                        display: "none"
                        }
                }}
                backwardBtnProps={{
                    style:{
                    display: "none"
                    }
                }}
                dotsNav={{
                    show: true,
                    itemBtnProps: {
                        style: {
                            height: 13,
                            width: 13,
                            borderRadius: "50%",
                            border: 10,
                            margin: 4,
                            opacity: 1
                        }
                    },
                    activeItemBtnProps: {
                        style: {
                            height: 13,
                            width: 13,
                            borderRadius: "50%",
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
                        <p><span className={s.blue_text}>Сомневаетесь</span>, что <span className={s.bold_text}>потратите деньги</span> и <span className={s.bold_text}>не понравится</span> новая <span className={s.bold_text}>внешность?</span></p>
                    </div>
                    <div className={s.AI_text}>
                        <span className={s.AI_text_item}>Искусственный интеллект поможет Вам, просто загрузите свою фотографию и посмотрите на нового себя!</span>
                    </div>
                    <div className={s.button_item} id='surname'>
                        <p>Попробовать</p>
                    </div>
                </div>
                <div className={s.slide2}>
                <div className={s.slide_info}>
                        <p><span className={s.blue_text}>Сомневаетесь</span>, что <span className={s.bold_text}>потратите деньги</span> и <span className={s.bold_text}>не понравится</span> новая <span className={s.bold_text}>внешность?</span></p>
                    </div>
                    <div className={s.AI_text}>
                        <span className={s.AI_text_item}>Искусственный интеллект поможет Вам, просто загрузите свою фотографию и посмотрите на нового себя!</span>
                    </div>
                    <div className={s.button_item} id='surname'>
                        <p>Попробовать</p>
                    </div>
                </div>
                <div className={s.slide3}>
                <div className={s.slide_info}>
                        <p><span className={s.blue_text}>Сомневаетесь</span>, что <span className={s.bold_text}>потратите деньги</span> и <span className={s.bold_text}>не понравится</span> новая <span className={s.bold_text}>внешность?</span></p>
                    </div>
                    <div className={s.AI_text}>
                        <span className={s.AI_text_item}>Искусственный интеллект поможет Вам, просто загрузите свою фотографию и посмотрите на нового себя!</span>
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
