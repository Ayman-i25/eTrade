import './Contact.css'

import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Offer from '../../Components/Offer/Offer'
import Top from '../../Components/Top/Top'
import Btn from '../../Components/btn/btn'
import Service from '../../Components/Service/Service'
import Footer from '../../Components/Footer/Footer'
const Contact = () => {
    return (
        <div className='contact-section'>
            <NavBar bgColor='white' />
            <Offer />
            <Top page_to='/contact' page_title='Contact' section_title="Contact With Us" />
            <div className='container '>
                <div className='row my-5'>
                    <div className='col-lg-8'>
                        <h2 className='fw-bold fs-3'>We would love to hear from you.</h2>
                        <p>If you’ve got great products your making or looking to work with us then drop us a line.</p>
                        <div className='row mt-4'>
                            <div className='col-lg-4'>
                                <div className="mb-4 position-relative">
                                    <label htmlFor="user-name" className="form-label">User Name</label>
                                    <input type="text" className="form-control" id="user-name" required />
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <div className="mb-4 position-relative">
                                    <label htmlFor="user-Phone" className="form-label">Phone</label>
                                    <input type="tel" className="form-control" id="user-phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <div className="mb-4 position-relative">
                                    <label htmlFor="user-email" className="form-label">E-mail</label>
                                    <input type="email" className="form-control" id="user-email" required />
                                </div>
                            </div>
                        </div>
                        <div className="mb-4 position-relative">
                            <label htmlFor="user-message" className="form-label">Your Message</label>
                            <textarea class="form-control" id="message" name="message" cols="33"></textarea>
                        </div>
                        <Btn backgroundColor='#3577f0' hoverBack='#3577f0' color='white' title='Send Message' icone={false} to='/' width='fit-content' />
                    </div>
                    <div className='col-lg-4'>
                        <h4 className='fw-bold my-4'>Our Store</h4>
                        <ul className='p-0'>
                            <li>8212 E. Glen Creek Street Orchard Park, NY</li>
                            <li>14127, United States of America</li>
                            <br></br>
                            <li>Phone: +123 456 7890</li>
                            <li>Email: Hello@etrade.com</li>
                        </ul>
                        <h4 className='fw-bold my-4'>Careers</h4>
                        <p>Instead of buying six things, one that you really like.</p>
                        <h4 className='fw-bold my-4'>Opening Hours:</h4>
                        <p>Monday to Saturday: 9am - 10pm
                            <br></br> Sundays: 10am - 6pm</p>
                    </div>
                </div>
            </div>
            <Service />
            <Footer />
        </div>
    )
}

export default Contact
