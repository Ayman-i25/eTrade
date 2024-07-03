import './Poster.css'

import React from 'react'

const Poster = () => {
    return (
        <div className='poster-section mt-5'>
            <div className='container'>
                <div className='row row-cols-xl-2 row-cols-lg-2 row-cols-md-1 row-cols-1'>
                    <div className='col'>
                        <div className='po1 mb-2 rounded p-5 text-white'>
                            <h3>Rich Sound, For Less...</h3>
                            <span>Collections</span>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='po2 rounded p-5 text-white'>
                            <span>50% Offer in winter</span>
                            <h3>Get VR Reality Glass</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Poster
