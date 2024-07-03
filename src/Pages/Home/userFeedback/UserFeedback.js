import './UserFeedback.css'
import { FaQuoteLeft } from "react-icons/fa6";

import SectionHeader from '../../../Components/Section-Header/SectionHeader'
import PrevAndNextIcone from '../../../Components/Prev-Next-icon/PrevAndNextIcone';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { FeedbackData } from '../../../data/FeedbackData';

const UserFeedback = () => {
    const feedbackShow = FeedbackData.map((ele, index) => (
        <SwiperSlide  key={index}>
        <div className='Testimonials'>
            <div className='review-speech '>
                <p className='text-muted p-4 '>
                    {ele.speech}
                </p>
            </div>
            <div className='media d-flex  align-items-center gap-3'>
                <div className='image' >
                    <img className='w-100 h-100' src={ele.img} />
                </div>
                <div className='person-dis text-start'>
                    <span className='text-muted   d-block'>{ele.Position}</span>
                    <h5>{ele.name}</h5>
                </div>
            </div>
        </div>
    </SwiperSlide>
    ))
    return (
        <div className='user-feedback-section my-5 py-5'>
            <div className='container'>
                <div className='d-flex align-items-center justify-content-between mb-5'>
                    <SectionHeader spanIcone={<FaQuoteLeft />} span='Testimonials' sectionName='Users Feedback' />
                    <PrevAndNextIcone navigation_next="feedback-next" navigation_prev="feedback-prev" />
                </div>

                <div className='mt-4 d-flex justify-content-center gap-4 flex-wrap'>
                    <Swiper
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            576: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 1,
                            },
                            992: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 3,
                            },
                        }}
                        slidesPerView={3}
                        slidesPerGroup={1}
                        spaceBetween={20}
                        navigation={true}
                        navigation={{
                            nextEl: '#feedback-next',
                            prevEl: '#feedback-prev',
                        }}
                        modules={[Navigation]}
                        className="mySwiper3"
                    >
                        {feedbackShow}
                    </Swiper>
                </div>

            </div>
        </div>
    )
}

export default UserFeedback

