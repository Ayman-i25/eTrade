import React, { useState } from 'react'
import { TiWeatherWindy, TiLeaf, TiStopwatch } from "react-icons/ti";
import './Tabs.css'
import { TiStarFullOutline } from "react-icons/ti";
import image from '../../../assets/imgs/guy-plaid-shirt.jpg'
import Btn from '../../../Components/btn/btn';
const Tabs = () => {

    const [activeTab, setActiveTab] = useState('tab1');
    const [rating, setRating] = useState(0)

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
    const handleRating = (e) => {
        setRating(e);
        console.log(e)
    };

    return (
        <div className="tabs-section mt-5 py-5">
            <div className='container'>
                <div className="tabs-btn">
                    <ul className="d-flex p-0 mb-5 ">
                        <li className={activeTab === 'tab1' ? 'active' : ''} onClick={() => handleTabClick('tab1')}>Description</li>
                        <li className={activeTab === 'tab2' ? 'active' : ''} onClick={() => handleTabClick('tab2')}>Additional Information</li>
                        <li className={activeTab === 'tab3' ? 'active' : ''} onClick={() => handleTabClick('tab3')}>Reviews</li>
                    </ul>
                </div>
                <div className="tabs-content ">
                    {activeTab === 'tab1' &&
                        <>
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <h5>
                                        Specifications:
                                    </h5>
                                    <p>
                                        We’ve created a full-stack structure for our working workflow processes, were from the funny the century initial all the made, have spare to negatives. But the structure was from the funny the century rather, initial all the made, have spare to negatives.
                                    </p>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <h5>
                                        Care & Maintenance:
                                    </h5>
                                    <p>
                                        Use warm water to describe us as a product team that creates amazing UI/UX experiences, by crafting top-notch user experience.                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className='tab-Service mt-5'>
                                    <ul>
                                        <li>
                                            <TiWeatherWindy />
                                            Easy Returns
                                        </li>
                                        <li>
                                            <TiLeaf />
                                            Quality Service
                                        </li>
                                        <li>
                                            <TiStopwatch />
                                            Original Product
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </>
                    }
                    {activeTab === 'tab2' &&
                        <div className='tab2 w-100 bg-white'></div>
                    }
                    {activeTab === 'tab3' &&
                        <div className='row'>
                            <div className='col-lg-6'>
                                <h5>1 Review for this product</h5>
                                <div className="card my-5">
                                    <div className="row g-0">
                                        <div className="col-2">
                                            <img src={image} className="img-fluid rounded-circle" alt="avatar" />
                                        </div>
                                        <div className="col-10">
                                            <div className="card-body">
                                                <div className='d-flex align-items-center justify-content-between mb-4'>
                                                    <h5 className="card-title m-0">Eleanor Pena</h5>
                                                    <div>
                                                        <TiStarFullOutline className='text-warning' />
                                                        <TiStarFullOutline className='text-warning' />
                                                        <TiStarFullOutline className='text-warning' />
                                                        <TiStarFullOutline />
                                                        <TiStarFullOutline />
                                                    </div>
                                                </div>
                                                <p className="card-text">“We’ve created a full-stack structure for our working workflow processes, were from the funny the century initial all the made, have spare to negatives. ”</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <h5>Add a Review</h5>
                                <p>Your email address will not be published. Required fields are marked *</p>
                                <div className="rating">
                                    <span className='me-3 my-3 d-inline-block'>Your Rating:</span>
                                    {[1, 2, 3, 4, 5].map((ele) => (
                                        <TiStarFullOutline key={ele} className={` fs-4 ${rating >= ele ? 'text-warning' : ''}`} onClick={() => handleRating(ele)} />
                                    ))}
                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='form-group'>
                                            <label>Other Notes (Optional)</label>
                                            <textarea name='message' placeholder='Your Comment'></textarea>
                                        </div>
                                    </div>
                                    <div className='col-md-12 col-lg-6'>
                                        <div className='form-group'>
                                            <label>Name</label>
                                            <input name='name' type='text' />
                                        </div>
                                    </div>
                                    <div className='col-md-12 col-lg-6'>
                                        <div className='form-group'>
                                            <label>Email</label>
                                            <input name='email' type='email' />
                                        </div>
                                    </div>
                                    <div className='col-6 '>
                                        <div className='form-group'>
                                            <Btn  backgroundColor='#3577f0' color='white' title='Submit Comment' hoverBack='#3577f0' icone={false}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Tabs
