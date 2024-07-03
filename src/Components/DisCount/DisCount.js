import React from 'react'
import './DisCount.css'
const DisCount = ({ children }) => {
    return (
        <div className='disCount'>
            {children}% OFF
        </div>
    )
}

export default DisCount


