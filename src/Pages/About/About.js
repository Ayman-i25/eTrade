import './About.css'
import { FaShoppingBasket } from "react-icons/fa";
import NavBar from '../../Components/NavBar/NavBar'
import Offer from '../../Components/Offer/Offer'
import Top from '../../Components/Top/Top'
import SectionHeader from '../../Components/Section-Header/SectionHeader'
import React from 'react'
import { Link } from 'react-router-dom'
import PrevAndNextIcone from '../../Components/Prev-Next-icon/PrevAndNextIcone';
import Newsletter from '../../Components/Newsletter/Newsletter';
import Service from '../../Components/Service/Service';
import Footer from '../../Components/Footer/Footer';

import { motion } from "framer-motion"


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// img import 
import team1 from '../../assets/imgs/team (1).jpg'
import team2 from '../../assets/imgs/team (2).jpg'
import team3 from '../../assets/imgs/team (3).jpg'
import team4 from '../../assets/imgs/team (4).jpg'
import team5 from '../../assets/imgs/team (5).jpg'
import team6 from '../../assets/imgs/team (6).jpg'
import imgAbout from '../../assets/imgs/about.jpg'
import feature1 from '../../assets/imgs/feature (1).jpg'
import feature2 from '../../assets/imgs/feature (2).jpg'

const About = () => {
    return (
        <div className='about-section'>
            <NavBar bgColor='white' />
            <Offer />
            <Top page_to='/aboutUs' page_title='About Us' section_title="About Us" />
            <div className='container'>
                <div className='row mt-5 align-items-center'>
                    <div className='col-lg-5 '>
                        <img className='first-img w-100 rounded' style={{ height: '500px', objectFit: 'cover' }} src={imgAbout} alt='pic' />
                    </div>
                    <div className='ps-lg-5 col-lg-7'>
                        <SectionHeader spanIcone={<FaShoppingBasket />} span='About Store' sectionName='Online shopping includes both buying things online.' />
                        <p className='fs-4 lead '>Salesforce B2C Commerce can help you create unified, intelligent digital commerce experiences — both online and in the store.</p>
                        <div className='row'>
                            <div className='col-6'>
                                <p className='fs-6 '>Empower your sales teams with industry tailored solutions that support manufacturers as they go digital, and adapt to changing markets & customers faster by creating new business.</p>
                            </div>
                            <div className='col-6'>
                                <p className='fs-6 '>Salesforce B2B Commerce offers buyers the seamless, self-service experience of online shopping with all the B2B</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='box-wrapper'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='box my-3 my-lg-0 p-5'>
                                <svg width="60" height="60" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_231_793)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M50 0H200V50V150L150 200L150 50H0L50 0ZM0 165.067V100L65.067 100L0 165.067ZM100 200H35.7777L100 135.778L100 200Z" fill="url(#paint0_linear_231_793)" /> </g> <defs> <linearGradient id="paint0_linear_231_793" x1="177" y1="-9.23648e-06" x2="39.5" y2="152.5" gradientUnits="userSpaceOnUse"> <stop stop-color="#B0B9FF" /> <stop offset="1" stop-color="#E7E9FF" /> </linearGradient> <clipPath id="clip0_231_793"> <rect width="200" height="200" fill="white" /> </clipPath> </defs> </svg>
                                <span className='fw-bold my-3 d-block'>40,000+ Happy Customer</span>
                                <p>Empower your sales teams with industry tailored solutions that support.</p>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='box my-3 my-lg-0 p-5'>
                                <svg width="60" height="60" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M128.603 16.3347C115.825 -5.44489 84.3365 -5.4449 71.5579 16.3347L71.0938 17.1257C65.1986 27.1733 54.4518 33.378 42.8027 33.4596L41.8856 33.466C16.6346 33.6428 0.890585 60.9123 13.3629 82.8687L13.8159 83.6661C19.5698 93.7953 19.5698 106.205 13.8159 116.334L13.3629 117.131C0.890586 139.088 16.6346 166.357 41.8856 166.534L42.8027 166.54C54.4517 166.622 65.1986 172.827 71.0938 182.874L71.5579 183.665C84.3365 205.445 115.825 205.445 128.603 183.665L129.067 182.874C134.963 172.827 145.709 166.622 157.358 166.54L158.276 166.534C183.527 166.357 199.271 139.088 186.798 117.131L186.345 116.334C180.591 106.205 180.591 93.7953 186.345 83.6661L186.798 82.8687C199.271 60.9123 183.527 33.6428 158.276 33.466L157.358 33.4596C145.709 33.378 134.963 27.1733 129.067 17.1257L128.603 16.3347ZM100.081 149.604C127.476 149.604 149.685 127.396 149.685 100C149.685 72.6042 127.476 50.3955 100.081 50.3955C72.6848 50.3955 50.4761 72.6042 50.4761 100C50.4761 127.396 72.6848 149.604 100.081 149.604Z" fill="url(#paint0_linear_104_76)" /> <defs> <linearGradient id="paint0_linear_104_76" x1="100.081" y1="0" x2="100.081" y2="200" gradientUnits="userSpaceOnUse"> <stop stop-color="#DF99F7" /> <stop offset="1" stop-color="#FFDBB0" /> </linearGradient> </defs> </svg>
                                <span className='fw-bold my-3 d-block'>16 Years of Experiences</span>
                                <p>Empower your sales teams with industry tailored solutions that support.</p>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='box my-3 my-lg-0 p-5'>
                                <svg width="60" height="60" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M165.963 134.037C160.496 139.504 151.631 139.504 146.164 134.037L122.027 109.899C116.559 104.432 116.559 95.5678 122.027 90.1005L146.164 65.9631C151.631 60.4957 160.496 60.4957 165.963 65.9631L190.101 90.1004C195.568 95.5678 195.568 104.432 190.101 109.899L165.963 134.037ZM53.8359 134.037C48.3686 139.504 39.5042 139.504 34.0369 134.037L9.89952 109.899C4.43218 104.432 4.43217 95.5678 9.89951 90.1005L34.0369 65.9631C39.5042 60.4957 48.3686 60.4957 53.8359 65.9631L77.9733 90.1004C83.4406 95.5678 83.4406 104.432 77.9733 109.899L53.8359 134.037ZM109.9 190.1C104.432 195.568 95.5679 195.568 90.1005 190.1L65.9631 165.963C60.4958 160.496 60.4958 151.631 65.9631 146.164L90.1005 122.027C95.5679 116.559 104.432 116.559 109.9 122.027L134.037 146.164C139.504 151.631 139.504 160.496 134.037 165.963L109.9 190.1ZM109.9 77.9732C104.432 83.4405 95.5679 83.4406 90.1005 77.9732L65.9631 53.8358C60.4958 48.3685 60.4958 39.5042 65.9631 34.0368L90.1005 9.89946C95.5679 4.43212 104.432 4.43211 109.9 9.89945L134.037 34.0368C139.504 39.5042 139.504 48.3685 134.037 53.8358L109.9 77.9732Z" fill="url(#paint0_linear_105_379)" /> <defs> <linearGradient id="paint0_linear_105_379" x1="154.166" y1="35.9433" x2="47.2475" y2="144.745" gradientUnits="userSpaceOnUse"> <stop offset="0.0509862" stop-color="#FFB6E1" /> <stop offset="1" stop-color="#FBE3EA" /> </linearGradient> </defs> </svg>
                                <span className='fw-bold my-3 d-block'>12 Awards Won</span>
                                <p>Empower your sales teams with industry tailored solutions that support.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Our team section */}
            <div className='our-team py-5'>
                <div className='container '>
                    <div className='d-flex justify-content-between align-items-center mb-4'>
                        <SectionHeader span='Categories' sectionName='Browse by Category' spanIcone={''} />
                        <PrevAndNextIcone navigation_prev='our-team-prev' navigation_next='our-team-next' />
                    </div>
                    <div className=''>
                        <Swiper
                            breakpoints={{
                                0: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                                1200: {
                                    slidesPerView: 4,
                                },
                            }}
                            slidesPerView={7}
                            spaceBetween={20}
                            navigation={true}
                            grabCursor={true}
                            navigation={{
                                nextEl: '#our-team-next',
                                prevEl: '#our-team-prev',
                                clickable: true,
                            }}
                            modules={[Navigation]}
                            className="mySwiper1"
                        >
                            <SwiperSlide>
                                <div className='member'>
                                    <div>
                                        <img src={team1} alt='member-pic' />
                                    </div>
                                    <div className='text'>
                                        <span >Founder</span>
                                        <h5>Ayman</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='member'>
                                    <div>
                                        <img src={team6} alt='member-pic' />
                                    </div>
                                    <div className='text'>
                                        <span >CEO</span>
                                        <h5>James</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='member'>
                                    <div>
                                        <img src={team5} alt='member-pic' />
                                    </div>
                                    <div className='text'>
                                        <span >Designer</span>
                                        <h5>Lisa</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='member'>
                                    <div>
                                        <img src={team3} alt='member-pic' />
                                    </div>
                                    <div className='text'>
                                        <span >Designer</span>
                                        <h5>Robert</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='member'>
                                    <div>
                                        <img src={team2} alt='member-pic' />
                                    </div>
                                    <div className='text'>
                                        <span >Designer</span>
                                        <h5>Emily</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='member'>
                                    <div>
                                        <img src={team4} alt='member-pic' />
                                    </div>
                                    <div className='text'>
                                        <span >Designer</span>
                                        <h5>Joseph</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            {/* Feature section */}
            <div className='features my-5'>
                <div className='container'>
                    <div className='features-1 mb-5'>
                        <div className='row align-items-center'>
                            <div className='col-lg-6'>
                                <div>
                                    <img className='w-100' src={feature1} alt='features-1' />
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className='content'>
                                    <span>Features #01</span>
                                    <h3 className='mb-3 mt-2'>Solutions that work together</h3>
                                    <p>Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services.</p>
                                    <button><Link to='/contact'>Get In Touch</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='features-2'>
                        <div className='row align-items-center'>
                            <div className='col-lg-6 order-lg-2'>
                                <div>
                                    <img className='w-100' src={feature2} alt='features-1' />
                                </div>
                            </div>
                            <div className='col-lg-6 order-lg-1'>
                                <div className='content'>
                                    <span>Features #01</span>
                                    <h3 className='mb-3 mt-2'>Solutions that work together</h3>
                                    <p>Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services.</p>
                                    <button><Link to='/contact'>Get In Touch</Link></button>
                                </div>
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

export default About
