import React, { useRef, useState } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import NavDropdown from './Nav-Dropdown'
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser, AiOutlineBars, AiOutlineCloseCircle } from "react-icons/ai";
import Btn from '../btn/btn';
import { motion } from "framer-motion"

function NavBar({ bgColor }) {
    const [sideBar, setSideBar] = useState(false)
    const [profileList, setProfileList] = useState(false)

    function HandleSideBar() {
        setSideBar(!sideBar)
    }

    return (
        <>
            <div className='navbarr' style={{ backgroundColor: bgColor }}>
                <div className='container' >
                    <motion.nav
                    initial={{y:-100}}
                    animate={{y:0}}
                    transition={{duration:1.5}}
                    className="navbar p-3   w-100 ">
                        <Link className="navbar-brand fw-bold fs-4" to={"/"}>eTrade</Link>
                        <div className="" >
                            <ul className={`navbar-nav sidebar flex-row gap-lg-5 gap-sm-2 me-auto mb-2 mb-lg-0  ${sideBar ? 'active ' : ''}`} >
                                <li className="nav-item d-lg-none d-flex align-items-center justify-content-between ">
                                    <a className="navbar-brand fw-bold fs-4" href="#">eTrade</a>
                                    <AiOutlineCloseCircle className='close-icone fs-3 text-dark' onClick={HandleSideBar} />
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className='nav-link p-2 p-lg-0 text-dark fw-bold position-relative dropdown-toggle' to='/' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Home
                                    </Link>
                                    <NavDropdown name_1='Electronics' name_2='Jewellery' name_3='Fashion' name_4='Furniture' name_5='NFT' />
                                </li>
                                <li className="nav-item ">
                                    <Link className='nav-link p-2 p-lg-0 text-dark fw-bold position-relative ' to='/'> Shop </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className='nav-link p-2 p-lg-0 text-dark fw-bold position-relative dropdown-toggle' to='/' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Pages
                                    </Link>
                                    <NavDropdown name_1='Wishlist' name_2='Cart' name_3='Sign Up' name_4='Privacy Policy' name_5='Coming Soon' />
                                </li>
                                <li className="nav-item ">
                                    <Link className='nav-link p-2 p-lg-0 text-dark fw-bold position-relative ' to='/about'> About </Link>
                                </li>
                                <li className="nav-item ">
                                    <Link className='nav-link p-2 p-lg-0 text-dark fw-bold position-relative ' to='/contact'> Contact </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='position-relative'>
                            <ul className='navbar-nav gap-3 flex-row'>
                                <li className='nav-icone'>
                                    <a href='#'>
                                        <AiOutlineSearch className=' fs-4 text-dark' />
                                    </a>
                                </li>
                                <li className='nav-icone'>
                                    <Link to='/Wishlist'>
                                        <AiOutlineHeart className=' fs-4 text-dark' />
                                    </Link>
                                </li>
                                <li className='nav-icone'>
                                    <a className='position-relative' href='#'>
                                        <AiOutlineShoppingCart className=' fs-4 text-dark' />
                                        <span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2"><span class="visually-hidden">unread messages</span></span>
                                    </a>
                                </li>
                                <li className='nav-icone'>
                                    <AiOutlineUser className=' fs-4 text-dark ' onClick={() => setProfileList(!profileList)}/>
                                </li>
                                    <div className={`profile-list ${profileList ? 'show' : ''}`}>
                                        <span>QUICKLINKS</span>
                                        <ul>
                                            <li><Link to='/account'>My Account</Link></li>
                                            <li><Link to=''>Orders</Link></li>
                                            <li className='mb-4'><Link to=''>Setting</Link></li>
                                        </ul>
                                        <Btn backgroundColor='#3577f0' hoverBack='#3577f0' icone={false} color='white' title="Login" to='/signIn' width='100%' />
                                        <span>No account yet?</span>
                                        <Link style={{fontSize:'12px'}} className='fw-bold underline ms- mt-2' to='/signUp'>REGISTER HERE.</Link>
                                    </div>
                                <li className='nav-icone d-lg-none' onClick={HandleSideBar}>
                                    <a href='#'>
                                        <AiOutlineBars className='fs-4 text-dark' />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </motion.nav>
                    <div className={`overlay  ${sideBar ? 'd-bolck' : 'd-none'}`}></div>
                </div>
            </div>
        </>

    )
}

export default NavBar
