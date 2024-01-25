import React from "react";
import "./NineSection.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img from "../image/Intersect.png"

function NineSection(){
    return(
        <div className="Nine-section_container card-block">
            <h1 className="card-block-title">Команда</h1>
            <Swiper
                spaceBetween={50}
                slidesPerView= 'auto'
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className="card-slide">
                    <div className="card-block_container">
                        <div className="card-block_image img">
                            <img src={img} alt="" className="img_logo" />
                        </div>
                        <div className="card-block_contain">
                            <h2 className="card-block_title">Михайлов Михаил</h2>
                            <p className="card-block_txt">Руководитель курса/программы “Название курса/программы”</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="card-slide">
                    <div className="card-block_container">
                        <div className="card-block_image img">
                            <img src={img} alt="" className="img_logo" />
                        </div>
                        <div className="card-block_contain">
                            <h2 className="card-block_title">Михайлов Михаил</h2>
                            <p className="card-block_txt">Руководитель курса/программы “Название курса/программы”</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="card-slide">
                    <div className="card-block_container">
                        <div className="card-block_image img">
                            <img src={img} alt="" className="img_logo" />
                        </div>
                        <div className="card-block_contain">
                            <h2 className="card-block_title">Михайлов Михаил</h2>
                            <p className="card-block_txt">Руководитель курса/программы “Название курса/программы”</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="card-slide">
                    <div className="card-block_container">
                        <div className="card-block_image img">
                            <img src={img} alt="" className="img_logo" />
                        </div>
                        <div className="card-block_contain">
                            <h2 className="card-block_title">Михайлов Михаил</h2>
                            <p className="card-block_txt">Руководитель курса/программы “Название курса/программы”</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default NineSection;