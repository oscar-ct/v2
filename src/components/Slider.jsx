import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper-bundle.css"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Slider = ({array}) => {
    return (

        <Swiper className={"md:rounded-lg md:w-10/12 lg:w-8/12 2xl:w-6/12"} slidesPerView={1} pagination={{clickable: true}} navigation>
            {array.map(function(url, index) {
                return  (
                    <SwiperSlide key={index}>
                        <img src={url} alt={"screenshot"}/>
                    </SwiperSlide> )
            })}
        </Swiper>

    );
};

export default Slider;