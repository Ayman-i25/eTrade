import './Top.css'
import { Link } from 'react-router-dom'

import React from 'react'

const Top = ({page_to, page_title, section_title}) => {
    return (
        <div className='section-top'>
            <div className='container'>
                <div className='d-flex align-items-center gap-2 mb-3'>
                    <Link className='lead fs-6 text-muted' to='/'>Home</Link>
                    <span className='d-block'> | </span>
                    <Link className='lead fs-6 text-primary' to={page_to}>{page_title}</Link>
                </div>
                <h1>{section_title}</h1>
            </div>
        </div>
    )
}

export default Top
