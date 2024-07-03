import React from 'react'
import { FiEdit } from "react-icons/fi";
import { Link } from 'react-router-dom';
const Addresses = () => {
    return (
        <>
            <div className='addresses'>
                <p>The following addresses will be used on the checkout page by default.</p>
                <div className='row mt-4'>
                    <div className='col-lg-6'>
                        <div className='border-bottom pb-3 mb-3 d-flex justify-content-between align-items-center'>
                            <h4 className='fw-bold'>Shipping Address</h4>
                            <Link to={'../addressesEdit'}>
                                <FiEdit />
                            </Link>
                        </div>
                        <ul>
                            <li>Name: Hasan AH</li>
                            <li>Email: admin@email.com</li>
                            <li>Phone: 1234 567890</li>
                            <br></br>
                            <li>7398 Smoke Ranch Road</li>
                            <li>Las Vegas, Nevada 89128</li>
                        </ul>
                    </div>
                    <div className='col-lg-6'>
                        <div className='border-bottom pb-3 mb-3 d-flex justify-content-between align-items-center'>
                            <h4 className='fw-bold'>Billing Address</h4>
                            <Link to={'../addressesEdit'}>
                                <FiEdit />
                            </Link>
                        </div>
                        <ul>
                            <li>Name: Hasan AH</li>
                            <li>Email: admin@email.com</li>
                            <li>Phone: 1234 567890</li>
                            <br></br>
                            <li>7398 Smoke Ranch Road</li>
                            <li>Las Vegas, Nevada 89128</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Addresses
