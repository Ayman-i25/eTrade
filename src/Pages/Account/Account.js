import React, { useEffect, useState } from 'react'
import './Account.css'
import NavBar from '../../Components/NavBar/NavBar'
import Offer from '../../Components/Offer/Offer'
import Top from '../../Components/Top/Top'
import { Link, Outlet } from 'react-router-dom'
import { MdWindow } from "react-icons/md";
import { FaShoppingBasket, FaFileDownload, FaUser } from "react-icons/fa";
import { IoHomeSharp, IoLogOutOutline } from "react-icons/io5";
import imag from '../../assets/imgs/team (1).jpg'
import Newsletter from '../../Components/Newsletter/Newsletter.js'
import Service from '../../Components/Service/Service.js'
import Footer from '../../Components/Footer/Footer.js'
const Account = () => {
    const [content, setContent] = useState('dashborad')


    return (
        <>
            <NavBar bgColor='white' />
            <Offer />
            <Top page_to='/account' page_title='My Account' section_title="Profile" />
            <div className='account-section'>
                <div className='container my-5'>
                    <div>
                        <img src={imag} alt='profile-img' />
                        <h4>Hello Hasan</h4>
                        <span>eTrade Member Since Sep 2020</span>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-lg-3'>
                            <div className='profile-list border rounded p-5 p-md-3 p-xl-4 mb-5'>
                                <ul>
                                    <li onClick={() => setContent('dashborad')}><Link to=''><MdWindow className='me-3' />Dashborad</Link></li>
                                    <li onClick={() => setContent('orders')}><Link to='orders'><FaShoppingBasket className='me-3' />Orders</Link></li>
                                    <li onClick={() => setContent('downloads')}><Link to=''><FaFileDownload className='me-3' />Downloads</Link></li>
                                    <li onClick={() => setContent('addresses')}><Link to='addresses'><IoHomeSharp className='me-3' />Addresses</Link></li>
                                    <li onClick={() => setContent('account-details')}><Link to=''><FaUser className='me-3' />Account-Details</Link></li>
                                    <li><Link to=''><IoLogOutOutline className='me-3' />Dashborad</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-9'>
                            {content === 'dashborad' ? <p>From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
                                : content === 'orders' ? <Outlet /> : content === 'downloads' ? <p>You don't have any downloads</p> : content === 'addresses' ?
                                    <Outlet /> : ''}
                        </div>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Service />
            <Footer />
        </>
    )
}

export default Account
