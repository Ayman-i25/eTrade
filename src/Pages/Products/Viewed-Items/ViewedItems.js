import { productsData } from '../../../data/productsData'
import './ViewedItems.css'
import { FaShoppingBasket, FaHeart, FaEye } from "react-icons/fa";

import PrevAndNextIcone from '../../../Components/Prev-Next-icon/PrevAndNextIcone';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import DisCount from '../../../Components/DisCount/DisCount';
import ItemDetails from '../../../Components/ItemDetails/ItemDetails';

import React, { useState } from 'react'
import SectionHeader from '../../../Components/Section-Header/SectionHeader';
import { Link } from 'react-router-dom';
import Modalproduct from '../../../Components/Modal-product/Modal-product';

const ViewedItems = () => {
    const [prodcutId, setProdcutId] = useState(1)
    const handelId = (id) => {
        setProdcutId(id)
    }
    const productShow = productsData.map((ele,index) => {
        const colorKeys = Object.keys(ele.colors); // Extracting color keys from product data

        const ColorSpan = colorKeys.map((index, colorKey) => (
            <span key={index} style={{ backgroundColor: ele.colors[colorKey] }}></span>
        ))

        return (
            <SwiperSlide key={index}>
                <div className="card position-relative" style={{ width: '18rem' }} key={ele.id}>
                    <div className='card-image position-relative'>
                        <a href={`/products/${ele.id}`} >
                            <img src={ele.img} className='card-img-top w-100' alt={ele.name} />
                        </a>
                    </div>
                    <div className='card-body'>
                        <ItemDetails title={ele.name} oldCost={ele.oldCost} CurrentCost={ele.currentCost} alignItems='start' />
                        <div className='product-color d-flex align-items-center gap-3 mt-3'>
                            {ColorSpan}
                        </div>
                    </div>
                    <div className='dis-Count'>
                        <DisCount>{ele.disCount}</DisCount>
                    </div>
                </div>
            </SwiperSlide>
        );
    });
    return (
        <div className='ViewedItems-section'>
            <div className='container'>
                <div className='d-flex align-items-center justify-content-between mb-5'>
                    <SectionHeader spanIcone={<FaShoppingBasket />} span='Your Recently' sectionName='Viewed Items' />
                    <PrevAndNextIcone navigation_prev='ViewedItems-prev' navigation_next='ViewedItems-next' />
                </div>
                <Swiper
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        576: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 4,
                        },
                    }}
                    slidesPerGroup={1}
                    spaceBetween={20}
                    navigation={{
                        nextEl: '#ViewedItems-next',
                        prevEl: '#ViewedItems-prev',
                    }}
                    modules={[Navigation]}
                    className="mySwiper4"
                >
                    {productShow}
                </Swiper>
                <Modalproduct id={prodcutId} />
            </div>
        </div>
    )
}

export default ViewedItems
