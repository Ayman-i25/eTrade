import React from 'react'
import { Link } from 'react-router-dom'

function NavDropdown(props) {
    return (
        <ul className="dropdown-menu position-absolute" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/wishlist">{props.name_1}</a></li>
            <li><a className="dropdown-item" href="#">{props.name_2}</a></li>
            <li><a className="dropdown-item" href="/signUp">{props.name_3}</a></li>
            <li><Link to={'/privacyPolicy'} className='dropdown-item'>{props.name_4}</Link></li>
        </ul>
    )
}

export default NavDropdown
