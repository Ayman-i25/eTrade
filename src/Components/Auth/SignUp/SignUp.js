import { Link } from 'react-router-dom'
import './SignUp.css'

import React from 'react'
import Btn from '../../btn/btn'
import SignIn from '../SignIn/SignIn'

const SignUp = () => {
    return (
        <div className='signup-section'>
            <div className='row'>
                <div className='col-lg-4 d-none d-lg-block'>
                    <div className='background ps-4 pt-5 text-center'>
                        <Link to={'/'} >eTrade</Link>
                        <h3 className='mt-5'>We Offer the Best Products</h3>
                    </div>
                </div>
                <div className='col-lg-8 p-0'>
                    <div className='d-flex justify-content-end align-items-center pe-5 pt-5'>
                        <p className='pe-4 m-0'>Already a member?</p>
                        <Btn backgroundColor='#ff497c' hoverBack='#ff497c' color='white' title='Sign In' icone={false} to="/signIn" width='fit-content' />
                    </div>
                    <div className='wrapper-right w-100 d-flex flex-column justify-content-center align-items-center'>
                        <h2>I'm New Here</h2>
                        <p className='muted'>Enter your detail below</p>
                        <form className='px-4 px-md-0'>
                            <div className="mb-4 position-relative">
                                <label htmlFor="user-name" className="form-label">User Name</label>
                                <input type="text" className="form-control" id="user-name" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-4 position-relative">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-4 position-relative">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <Btn backgroundColor='#3577f0' hoverBack='#3577f0' color='white' title='Create Account' icone={false} to='/' width='fit-content'  />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
