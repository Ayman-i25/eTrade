import { Link } from 'react-router-dom'
import './AllProducts.css'
import { FaShoppingBasket, FaHeart, FaEye } from "react-icons/fa";
import DisCount from '../../Components/DisCount/DisCount';
import ItemDetails from '../../Components/ItemDetails/ItemDetails';
import React, { useRef, useState } from 'react'
import Btn from '../../Components/btn/btn';
import { productsData } from '../../data/productsData';
import Newsletter from '../../Components/Newsletter/Newsletter';
import Footer from '../../Components/Footer/Footer';
import NavBar from '../../Components/NavBar/NavBar';
import Top from '../../Components/Top/Top';
import Service from '../../Components/Service/Service';
import { motion } from "framer-motion"
import { MdOutlineSort } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const AllProducts = () => {
    const [count, setCount] = useState(8)
    const [isHidden1, setIsHidden1] = useState(false);
    const [isHidden2, setIsHidden2] = useState(false);
    const [isHidden3, setIsHidden3] = useState(false);
    const [isHidden4, setIsHidden4] = useState(false);

    const handleHidden1 = () => {
        setIsHidden1(!isHidden1)
    }
    const handleHidden2 = () => {
        setIsHidden2(!isHidden2)
    }
    const handleHidden3 = () => {
        setIsHidden3(!isHidden3)
    }
    const handleHidden4 = () => {
        setIsHidden4(!isHidden4)
    }

    const productFuntion = () => {
        const productShow = productsData.map((ele, index) => {
            const colorKeys = Object.keys(ele.colors); // Extracting color keys from product data
            const ColorSpan = colorKeys.map((index, colorKey) => (
                <span key={index} style={{ backgroundColor: ele.colors[colorKey] }}></span>
            ))
            if (index <= count) {
                return (
                    <div className='col-md-6 col-lg-6 col-xl-4'>
                        <div className="card position-relative" key={ele.id}>
                            <div className='card-image position-relative'>
                                <Link to={`/products/${ele.id}`} >
                                    <img src={ele.img} className='card-img-top w-100' alt={ele.name} />
                                </Link>
                                <div className='button '>
                                    <div className='btn'><FaHeart /></div>
                                    <div className='btn mx-1'>Buy Product</div>
                                    <div className='btn'><FaEye /></div>
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
                    </div>
                );
            }
        });
        return productShow
    }


    const handleProductLoad = () => {
        setCount(count + 5)
    }


    return (
        <div className='allproducts-section'>
            <NavBar />
            <div className='mb-5'>
                <Top page_to='/products' page_title='Shope' section_title="Explore All Products" />
            </div>
            <div className='container'>
                <div className='wrapper mt-5'>
                    <div className='d-lg-none'>
                        <MdOutlineSort data-bs-toggle="modal" data-bs-target="#fillter " />
                    </div>
                    {/* modal show the fillters on s and m screeen */}
                    <div className="modal fade" id="fillter" tabindex="-1" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <div className={`categoryies-wrapper mb-4 `} >
                                        <div className='cat-title d-flex justify-content-between align-items-center' onClick={handleHidden1}>
                                            <h4>CATEGORIES</h4>
                                            <IoIosArrowDown style={{ transform: isHidden1 ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                                        </div>
                                        <div className={`d-flex flex-column ${isHidden1 ? 'hidden' : ''}`}>
                                            <input id='electronics' name='cat-flter' type='radio' />
                                            <label htmlFor='electronics'>Electronics</label>
                                            <input id='nft' name='cat-flter' type='radio' />
                                            <label htmlFor='nft'>NFT</label>
                                            <input id='jewellery' name='cat-flter' type='radio' />
                                            <label htmlFor='jewellery'>Jewellery</label>
                                            <input id='fashion' name='cat-flter' type='radio' />
                                            <label htmlFor='fashion'>Fashion</label>
                                            <input id='furniture' name='cat-flter' type='radio' />
                                            <label htmlFor='furniture'>Furniture</label>
                                        </div>
                                    </div>
                                    <div className='gender-wrapper mb-4'>
                                        <div className='cat-title d-flex justify-content-between align-items-center' onClick={handleHidden2}>
                                            <h4 >GENDER</h4>
                                            <IoIosArrowDown style={{ transform: isHidden2 ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                                        </div>
                                        <div className={`d-flex flex-column ${isHidden2 ? 'hidden' : ''}`}>
                                            <input id='man' name='cat-flter' type='radio' />
                                            <label htmlFor='man'>Man</label>
                                            <input id='women' name='cat-flter' type='radio' />
                                            <label htmlFor='women'>Women</label>
                                            <input id='unisex' name='cat-flter' type='radio' />
                                            <label htmlFor='unisex'>Unisex</label>
                                        </div>
                                    </div>
                                    <div className='size-wrapper  mb-4'>
                                        <div className='cat-title d-flex justify-content-between align-items-center' onClick={handleHidden3}>
                                            <h4>SIZE</h4>
                                            <IoIosArrowDown style={{ transform: isHidden3 ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                                        </div>
                                        <div className={`d-flex flex-wrap ${isHidden3 ? 'hidden' : ''}`}>
                                            <input id='4xl' name='cat-flter' type='radio' />
                                            <label htmlFor='4xl'>4XL</label>
                                            <input id='3xl' name='cat-flter' type='radio' />
                                            <label htmlFor='3xl'>3XL</label>
                                            <input id='xxl' name='cat-flter' type='radio' />
                                            <label htmlFor='xxl'>XXL</label>
                                            <input id='xl' name='cat-flter' type='radio' />
                                            <label htmlFor='xl'>xl</label>
                                            <input id='l' name='cat-flter' type='radio' />
                                            <label htmlFor='l'>L</label>
                                            <input id='m' name='cat-flter' type='radio' />
                                            <label htmlFor='m'>M</label>
                                            <input id='s' name='cat-flter' type='radio' />
                                            <label htmlFor='s'>S</label>
                                            <input id='xs' name='cat-flter' type='radio' />
                                            <label htmlFor='xs'>XS</label>
                                        </div>
                                    </div>
                                    <div className='price-wrapper  mb-4' onClick={handleHidden4}>
                                        <div className='cat-title d-flex justify-content-between align-items-center' onClick={handleHidden4}>
                                            <h4>PRICE</h4>
                                            <IoIosArrowDown style={{ transform: isHidden4 ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                                        </div>
                                        <div className={`d-flex flex-wrap ${isHidden4 ? 'hidden' : ''}`}>
                                            <input id='50' name='cat-flter' type='radio' />
                                            <label htmlFor='50'>50</label>
                                            <input id='100' name='cat-flter' type='radio' />
                                            <label htmlFor='100'>100</label>
                                            <input id='200' name='cat-flter' type='radio' />
                                            <label htmlFor='200'>200</label>
                                            <input id='300' name='cat-flter' type='radio' />
                                            <label htmlFor='300'>300</label>
                                            <input id='400' name='cat-flter' type='radio' />
                                            <label htmlFor='400'>400</label>
                                            <input id='500' name='cat-flter' type='radio' />
                                            <label htmlFor='500'>500</label>
                                        </div>
                                    </div>
                                    <Btn backgroundColor='#3577f0' color='white' title='All Reast' hoverBack='#3577f0' icone={false} padding='10px 15px' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-3 d-none d-lg-block'>
                            <div className={`categoryies-wrapper mb-4 `} >
                                <div className='cat-title d-flex justify-content-between align-items-center' onClick={handleHidden1}>
                                    <h4>CATEGORIES</h4>
                                    <IoIosArrowDown style={{ transform: isHidden1 ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                                </div>
                                <div className={`d-flex flex-column ${isHidden1 ? 'hidden' : ''}`}>
                                    <input id='electronics' name='cat-flter' type='radio' />
                                    <label htmlFor='electronics'>Electronics</label>
                                    <input id='nft' name='cat-flter' type='radio' />
                                    <label htmlFor='nft'>NFT</label>
                                    <input id='jewellery' name='cat-flter' type='radio' />
                                    <label htmlFor='jewellery'>Jewellery</label>
                                    <input id='fashion' name='cat-flter' type='radio' />
                                    <label htmlFor='fashion'>Fashion</label>
                                    <input id='furniture' name='cat-flter' type='radio' />
                                    <label htmlFor='furniture'>Furniture</label>
                                </div>
                            </div>
                            <div className='gender-wrapper mb-4'>
                                <div className='cat-title d-flex justify-content-between align-items-center' onClick={handleHidden2}>
                                    <h4 >GENDER</h4>
                                    <IoIosArrowDown style={{ transform: isHidden2 ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                                </div>
                                <div className={`d-flex flex-column ${isHidden2 ? 'hidden' : ''}`}>
                                    <input id='man' name='cat-flter' type='radio' />
                                    <label htmlFor='man'>Man</label>
                                    <input id='women' name='cat-flter' type='radio' />
                                    <label htmlFor='women'>Women</label>
                                    <input id='unisex' name='cat-flter' type='radio' />
                                    <label htmlFor='unisex'>Unisex</label>
                                </div>
                            </div>
                            <div className='size-wrapper  mb-4'>
                                <div className='cat-title d-flex justify-content-between align-items-center' onClick={handleHidden3}>
                                    <h4>SIZE</h4>
                                    <IoIosArrowDown style={{ transform: isHidden3 ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                                </div>
                                <div className={`d-flex flex-wrap ${isHidden3 ? 'hidden' : ''}`}>
                                    <input id='4xl' name='cat-flter' type='radio' />
                                    <label htmlFor='4xl'>4XL</label>
                                    <input id='3xl' name='cat-flter' type='radio' />
                                    <label htmlFor='3xl'>3XL</label>
                                    <input id='xxl' name='cat-flter' type='radio' />
                                    <label htmlFor='xxl'>XXL</label>
                                    <input id='xl' name='cat-flter' type='radio' />
                                    <label htmlFor='xl'>xl</label>
                                    <input id='l' name='cat-flter' type='radio' />
                                    <label htmlFor='l'>L</label>
                                    <input id='m' name='cat-flter' type='radio' />
                                    <label htmlFor='m'>M</label>
                                    <input id='s' name='cat-flter' type='radio' />
                                    <label htmlFor='s'>S</label>
                                    <input id='xs' name='cat-flter' type='radio' />
                                    <label htmlFor='xs'>XS</label>
                                </div>
                            </div>
                            <div className='price-wrapper  mb-4' onClick={handleHidden4}>
                                <div className='cat-title d-flex justify-content-between align-items-center' onClick={handleHidden4}>
                                    <h4>PRICE</h4>
                                    <IoIosArrowDown style={{ transform: isHidden4 ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                                </div>
                                <div className={`d-flex flex-wrap ${isHidden4 ? 'hidden' : ''}`}>
                                    <input id='50' name='cat-flter' type='radio' />
                                    <label htmlFor='50'>50</label>
                                    <input id='100' name='cat-flter' type='radio' />
                                    <label htmlFor='100'>100</label>
                                    <input id='200' name='cat-flter' type='radio' />
                                    <label htmlFor='200'>200</label>
                                    <input id='300' name='cat-flter' type='radio' />
                                    <label htmlFor='300'>300</label>
                                    <input id='400' name='cat-flter' type='radio' />
                                    <label htmlFor='400'>400</label>
                                    <input id='500' name='cat-flter' type='radio' />
                                    <label htmlFor='500'>500</label>
                                </div>
                            </div>
                            <Btn backgroundColor='#3577f0' color='white' title='All Reast' hoverBack='#3577f0' icone={false} padding='10px 15px' />
                        </div>
                        <div className='col-lg-9 d-flex flex-wrap'>
                            <div className='row'>
                                {productFuntion()}
                                {count <= productsData.length &&
                                    <div className='d-flex justify-content-center mt-4 mb-5 ' onClick={() => handleProductLoad()}>
                                        <Btn hoverBack='#f6f7fb' backgroundColor='#f6f7fb' color='#777' title='Load More' width='fit-content' />
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Service />
            <Footer />
        </div>
    )
}

export default AllProducts
