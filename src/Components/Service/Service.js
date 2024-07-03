import './Service.css'
import { TiWeatherWindy, TiLeaf, TiStopwatch, TiFlash   } from "react-icons/ti";

import React from 'react'

const Service = () => {
    return (
        <div className='service-section mt-5'>
            <div className='container'>
                <div className='row row-cols-xl-4 row-cols-sm-2 row-cols-1'>
                    <div className='col'>
                        <div className='box  gap-3 mb-3 d-flex justify-content-center align-items-center'>
                            <TiWeatherWindy className=' text-primary'/>
                            <div className='text '>
                                <h5 className='fs-6 fw-bold'>Fast & Secure Delivery</h5>
                                <p className='lead fs-6 '>Tell about your service.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='box  gap-3 mb-3 d-flex justify-content-center align-items-center'>
                            <TiLeaf className=' text-primary'/>
                            <div className='text '>
                                <h5 className='fs-6 fw-bold'>Money Back Guarantee</h5>
                                <p className='lead fs-6 '>Within 10 days.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='box  gap-3 mb-3 d-flex justify-content-center align-items-center'>
                            <TiStopwatch className=' text-primary' />
                            <div className='text '>
                                <h5 className='fs-6 fw-bold'>24 Hour Return Policy</h5>
                                <p className='lead fs-6 '>No question ask.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='box  gap-3 mb-3 d-flex justify-content-center align-items-center'>
                            <TiFlash className=' text-primary' />
                            <div className='text '>
                                <h5 className='fs-6 fw-bold'>Pro Quality Support</h5>
                                <p className='lead fs-6 '>24/7 Live support.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
