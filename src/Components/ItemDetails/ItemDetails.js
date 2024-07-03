import './ItemDetails.css'

import React from 'react'

const ItemDetails = ({ title, oldCost, CurrentCost, alignItems }) => {
    return (
        <div className='ItemDetails' style={{alignItems: alignItems}}>
            <h5 className='card-title text-muted fs-6'>{title}</h5>
            <div className='cost d-flex gap-2'>
                <span className='old fs-5 fw-bold text-decoration-line-through '>{`$${oldCost}`}</span>
                <span className='new fs-5 fw-bold '>{`$${CurrentCost}`}</span>
            </div>
        </div>
    )
}

export default ItemDetails
