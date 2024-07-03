import './Footer.css'
import { LuMailOpen, LuPhone } from "react-icons/lu";
import AppSore from '../../assets/imgs/apple-app-store-logo-PhotoRoom.png-PhotoRoom.png'
import GooglePlay from '../../assets/imgs/google-play-badge-PhotoRoom.png-PhotoRoom.png'
import Barcode from '../../assets/imgs/barcode.png'
import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaDiscord, FaPaypal, FaCcMastercard, FaCcVisa } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
     

        <div className='footer-section mt-5 py-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-sm-6'>
                        <h5 className='fw-bold title mb-3'>Support</h5>
                        <p className='mb-3'>685 Market Street,Las Vegas, LA 95820,United States.</p>
                        <ul>
                            <li><Link to={'/'}><LuMailOpen className='me-1' />example@domain.com </Link></li>
                            <li><Link to={'/'}><LuPhone className='me-1' />(+01) 850-315-5862 </Link></li>
                        </ul>
                    </div>
                    <div className='col-lg-3 col-sm-6'>
                        <h5 className='fw-bold title mb-3'>Account</h5>
                        <ul>
                            <li><Link className='nav-linkk' to={'/account'}>My Account</Link></li>
                            <li><Link className='nav-linkk' to={'/signIn'}>Login</Link></li>
                            <li><Link className='nav-linkk' to={'/cart'}>Cart</Link></li>
                            <li><Link className='nav-linkk' to={'/wishlist'}>Wishlist</Link></li>
                            <li><Link className='nav-linkk' to={'/products'}>Shop</Link></li>
                        </ul>
                    </div>
                    <div className='col-lg-3 col-sm-6'>
                        <h5 className='fw-bold title mb-3'>Quick Link</h5>
                        <ul>
                            <li><Link className='nav-linkk' to={'/about'}>About Us</Link></li>
                            <li><Link className='nav-linkk' to={'/privacyPolicy'}>Privacy Policy</Link></li>
                            <li><Link className='nav-linkk' to={'/privacyPolicy'}>Terms Of Use</Link></li>
                            <li><Link className='nav-linkk' to={'/contact'}>Contact</Link></li>
                        </ul>
                    </div>
                    <div className='col-lg-3 col-sm-6'>
                        <h5 className='fw-bold title mb-3'>Download App</h5>
                        <p>Save $3 With App & New User only</p>
                        <div className='d-flex width w-100'>
                            <img className='w-50' src={Barcode} alt='barcode' />
                            <div className='d-flex flex-column justify-content-around'>
                                <img style={{ backgroundColor: 'black', borderRadius: '5px' }} className='ms-2 w-100' src={AppSore} alt='AppSore' />
                                <img style={{ backgroundColor: 'black', borderRadius: '5px' }} className='ms-2 w-100' src={GooglePlay} alt='GooglePlay' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-4 pt-3 social'>
                    <div className='col-sm-12 col-lg-4'>
                        <ul className='d-flex gap-4 justify-content-center justify-content-lg-start '>
                            <li className='social-icone'>
                                <Link to={'/'}><FaFacebookF className='fs-6' /></Link>
                            </li>
                            <li className='social-icone'>
                                <Link to={'/'}><FaInstagram className='fs-6' /></Link>
                            </li>
                            <li className='social-icone'>
                                <Link to={'/'}><FaTwitter className='fs-6' /></Link>
                            </li>
                            <li className='social-icone'>
                                <Link to={'/'}><FaLinkedinIn className='fs-6' /></Link>
                            </li>
                            <li className='social-icone'>
                                <Link to={'/'}><FaDiscord className='fs-6' /></Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col-sm-12 col-lg-4 text-center'>
                        <p className='muted'>© 2023. All rights reserved by Axilthemes.</p>
                    </div>
                    <div className='col-sm-12 col-lg-4 text-center text-lg-end'>
                        <p>Accept For
                            <FaPaypal className='ms-2 fs-4' />
                            <FaCcMastercard className='mx-1 fs-4' />
                            <FaCcVisa className=' fs-4' />
                        </p>
                    </div>
       
                </div>
            </div>
        </div>
    )
}

export default Footer
