import React from 'react'

// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export const SwiperComp:React.FC = () =>{
    return(
        <>
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
            <SwiperSlide>
                <img src="/src/img/img1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/src/img/img2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/src/img/img3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/src/img/img1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/src/img/img2.jpg" />
            </SwiperSlide>

        </Swiper>
        </>
    )
}