import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import category css
import './Category.css'

// import required modules
// import { Navigation } from 'swiper/modules';
import category from './categoryData';

function SlickSlider() {

    const show = category.map((ele, index) => (
        <SwiperSlide key={index}>
            <div className='item border'>
                <div className='image'>
                    <img src={ele.image} className='w-100' />
                </div>
                <span className='lead fw-bold fs-6 pt-3'>{ele.name}</span>
            </div>
        </SwiperSlide>
    ))

    return (
        <div className='m-1 w-100'>
            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 5,
                    },
                    1200: {
                        slidesPerView: 6,
                    },
                }}
                slidesPerView={7}
                spaceBetween={20}
                navigation={true}
                grabCursor={true}
                navigation={{
                    nextEl: '#category-next',
                    prevEl: '#category-prev',
                    clickable: true,
                }}
                modules={[Navigation]}
                className="mySwiper1"
            >
                {show}
            </Swiper>
        </div>
    );
}

export default SlickSlider;