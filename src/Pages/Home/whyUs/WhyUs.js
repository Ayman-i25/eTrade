import SectionHeader from '../../../Components/Section-Header/SectionHeader';
import './WhyUs.css';
import { SlLike } from 'react-icons/sl';
import { FcAdvertising, FcBullish, FcClock, FcShipped, FcCustomerSupport } from 'react-icons/fc';

import React from 'react';

const WhyUs = () => {
    return (
        <div className='WhyUs-section my-5'>
            <div className='container'>
                <div className='d-flex justify-content-center align-items-center mb-5 text-center '>
                    <SectionHeader spanIcone={<SlLike />} span='Why Us' sectionName='Why People Choose Us' />
                </div>
                <div className='row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 '>
                    <div className='col'>
                        <div className='box rounded text-center d-flex align-items-center justify-content-center flex-column p-4'>
                            <FcAdvertising />
                            <h5>Fast & Secure Delivery</h5>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='box rounded text-center d-flex align-items-center justify-content-center flex-column p-4'>
                            <FcBullish />
                            <h5>Money Back Guarantee</h5>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='box rounded text-center d-flex align-items-center justify-content-center flex-column p-4'>
                            <FcClock />
                            <h5>24 Hour Return Policy</h5>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='box rounded text-center d-flex align-items-center justify-content-center flex-column p-4'>
                            <FcShipped />
                            <h5>Pro Quality Support</h5>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='box rounded text-center d-flex align-items-center justify-content-center flex-column p-4'>
                            <FcCustomerSupport />
                            <h5>Next Level Pro Quality</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;
