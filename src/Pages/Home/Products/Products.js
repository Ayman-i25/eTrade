import SectionHeader from '../../../Components/Section-Header/SectionHeader'
import './Products.css'
import { FaShoppingBasket, FaHeart, FaEye } from "react-icons/fa";
import { productsData } from '../../../data/productsData';
import PrevAndNextIcone from '../../../Components/Prev-Next-icon/PrevAndNextIcone';
import NavBar from '../../../Components/NavBar/NavBar';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import Btn from '../../../Components/btn/btn';
import DisCount from '../../../Components/DisCount/DisCount';
import ItemDetails from '../../../Components/ItemDetails/ItemDetails';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useRef, useState } from 'react';
import Modalproduct from '../../../Components/Modal-product/Modal-product';

import Swal from 'sweetalert2'
import { useInView } from 'framer-motion';
import { ProductId } from '../../../context/productIdContext';

function Products() {

    const {id,setId} = useContext(ProductId)

    const handelId = (id) => {
        setId(id)
    }

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const productShow = productsData.map((ele, index) => {
        const colorKeys = Object.keys(ele.colors); // Extracting color keys from product data

        const ColorSpan = colorKeys.map((index, colorKey) => (
            <span key={index} style={{ backgroundColor: ele.colors[colorKey] }}></span>
        ))


        const alert = (name) => {
            Swal.fire({
                position: "center",
                icon: "success",
                title: name,
                timerProgressBar: true,
                showConfirmButton: false,
                timer: 1500,
            });
        }


        return (
            <SwiperSlide key={index}>
                <div className="card position-relative" style={{ width: '18rem' }} key={index}>
                    <div className='card-image position-relative'>
                        <Link to={`/products/${ele.id}`} >
                            <img src={ele.img} className='card-img-top w-100' alt={ele.name} />
                        </Link>
                        <div className='button '>
                            <div className='btn' onClick={() => alert(ele.name)}><FaHeart /></div>
                            <div className='btn mx-1'>Buy Product</div>
                            <div className='btn' data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => handelId(ele.id)}><FaEye /></div>
                        </div>
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
        <div className='prodcuts-section my-5' ref={ref} >
            <div className='container'>
                <div className='d-flex align-items-center justify-content-between'>
                    <SectionHeader spanIcone={<FaShoppingBasket />} span='Our Products' sectionName='Explore our Products' />
                    <PrevAndNextIcone navigation_prev='products-prev' navigation_next='products-next' />
                </div>

                <div className='wrapper mt-4 d-flex justify-content-center gap-4 flex-wrap'>
                    <Swiper
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                                grid: {
                                    rows: 5,
                                },
                            },
                            576: {
                                slidesPerView: 2,
                                slidesPerGroup: 2,
                                grid: {
                                    rows: 2,
                                },
                            },
                            768: {
                                slidesPerView: 3,
                                slidesPerGroup: 3,
                                grid: {
                                    rows: 2,
                                },
                            },
                            992: {
                                slidesPerView: 4,
                                slidesPerGroup: 4,
                                grid: {
                                    rows: 2,
                                },
                            },
                            1200: {
                                slidesPerView: 4,
                                slidesPerGroup: 4,
                                grid: {
                                    rows: 2,
                                },
                            },
                        }}
                        spaceBetween={20}
                        navigation={{
                            nextEl: '#products-next',
                            prevEl: '#products-prev',
                        }}
                        modules={[Grid, Navigation]}
                        className="mySwiper2"
                    >
                        {productShow}
                    </Swiper>
                    <Modalproduct />
                    <Btn to={'/products'} hoverBack='#f6f7fb' backgroundColor='#f6f7fb' color='#777' title='View All Products' />
                </div>
            </div>
        </div >
    )
}

export default Products


