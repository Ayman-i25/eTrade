import { productsData } from '../../../data/productsData'
import './NewArrivals.css'
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

import React, { useContext, useRef, useState  } from 'react'
import SectionHeader from '../../../Components/Section-Header/SectionHeader';
import Modalproduct from '../../../Components/Modal-product/Modal-product';
import { Link } from 'react-router-dom';
import { useInView } from 'framer-motion';
import { ProductId } from '../../../context/productIdContext';

const NewArrivals = () => {
    const [prodcutId, setProdcutId] = useState(1)

    const {id,setId} = useContext(ProductId)

    const handelId = (id) => {
        setId(id)
    }

    // framer motion
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    // porduct maping
    const prodcutsShow = productsData.map((ele , index) => (
        <SwiperSlide key = {index} >
            <div className="card position-relative align-items-center" style={{ width: '18rem' }} key={ele.id}>
                <div className='card-image position-relative'>
                    <Link to={`/products/${ele.id}`} >
                        <img src={ele.img} className='card-img-top w-100' alt={ele.name} />
                    </Link>
                </div>
                <div className='card-body'>
                    <ItemDetails title={ele.name} oldCost={ele.oldCost} CurrentCost={ele.currentCost} alignItems='center' />
                </div>
                <div className='button '>
                    <div className='btn'><FaHeart /></div>
                    <div className='btn mx-1'>Buy Product</div>
                    <div className='btn' data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => handelId(ele.id)}><FaEye /></div>
                </div>
                <div className='dis-Count'>
                    <DisCount>{ele.disCount}</DisCount>
                </div>
            </div>
        </SwiperSlide>
    ))
    return (
        <div className='newArrivals-section my-5' ref={ref}>
            <div className='container'>
                <div className='d-flex align-items-center justify-content-between mb-5'>
                    <SectionHeader spanIcone={<FaShoppingBasket />} span='This Week’s' sectionName='New Arrivals' />
                    <PrevAndNextIcone navigation_prev='newArrivals-prev' navigation_next='newArrivals-next' />
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
                        nextEl: '#newArrivals-next',
                        prevEl: '#newArrivals-prev',
                    }}
                    modules={[Navigation]}
                    className="mySwiper4"
                >
                    {prodcutsShow}
                </Swiper>
                <Modalproduct />
            </div>
        </div>
    )
}

export default NewArrivals
