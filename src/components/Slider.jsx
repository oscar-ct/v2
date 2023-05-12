import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper-bundle.css"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import {useState} from "react";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Slider = ({array}) => {
    const [opacity, setOpacity] = useState("opacity-75")

    return (

        <Swiper className={"md:rounded-t-lg md:w-10/12 lg:w-8/12 2xl:w-6/12"} slidesPerView={1} pagination={{clickable: true}} navigation>
            {array.map(function(url, index) {
                return  (
                    <SwiperSlide
                        className={`${opacity}`}
                        key={index}
                        onTouchStart={() => {setOpacity("opacity-100")}}
                        // onMouseLeave={() => {setOpacity("opacity-75")}}
                        onMouseEnter={() => {setOpacity("opacity-100")}}
                    >
                        <img className={"min-h-full min-w-full"} src={url} alt={"screenshot"}/>
                    </SwiperSlide> )
            })}
        </Swiper>

    );
};

export default Slider;