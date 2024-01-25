import React from "react";
import "./EightSection.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function EightSection(){
    function AdaptiveSize(){
        if(window.innerWidth<=1366 && window.innerWidth>1024){
            return 2.5
        }else if(window.innerWidth<=1024 && window.innerWidth>768){
            return 2
        }else if(window.innerWidth<=768 && window.innerWidth>640){
            return 1.5
        }else if(window.innerWidth<=640){
            return 1
        }else{
            return 3.75
        }
    }
    return(
        <div className="Eight-section_container slider-block">
            <h1 className="slider-block-title">Новости</h1>
            <Swiper
                spaceBetween={50}
                slidesPerView={AdaptiveSize()}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className="slider-block_container">
                        <div className="slider-block_contain">
                            <h2 className="slider-block_title">Создание новой лаборатории</h2>
                            <p className="slider-block_txt">Мы открыли новую современную лабораторию для исследований и разработки в области медицинской инженерии</p>
                            <span className="slider-block_date">24.11.2023</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-block_container">
                        <div className="slider-block_contain">
                            <h2 className="slider-block_title">Создание новой лаборатории</h2>
                            <p className="slider-block_txt">Мы открыли новую современную лабораторию для исследований и разработки в области медицинской инженерии</p>
                            <span className="slider-block_date">24.11.2023</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-block_container">
                        <div className="slider-block_contain">
                            <h2 className="slider-block_title">Создание новой лаборатории</h2>
                            <p className="slider-block_txt">Мы открыли новую современную лабораторию для исследований и разработки в области медицинской инженерии</p>
                            <span className="slider-block_date">24.11.2023</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-block_container">
                        <div className="slider-block_contain">
                            <h2 className="slider-block_title">Создание новой лаборатории</h2>
                            <p className="slider-block_txt">Мы открыли новую современную лабораторию для исследований и разработки в области медицинской инженерии</p>
                            <span className="slider-block_date">24.11.2023</span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="end_line-block2">
                <span className="end_line2"/>
            </div>
        </div>
    )
}

export default EightSection;