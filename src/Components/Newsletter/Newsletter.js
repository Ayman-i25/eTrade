import SectionHeader from '../Section-Header/SectionHeader'
import './Newsletter.css'
import { IoIosMailOpen } from "react-icons/io";
import { TbMailFast } from "react-icons/tb";

import React from 'react'
import Btn from '../btn/btn';

const Newsletter = () => {
    return (
        <div className='container'>
            <div className='newsletter-section mt-2 rounded py-5'>
                <SectionHeader spanIcone={<IoIosMailOpen />} span='Newsletter' sectionName='Get weekly update' />
                <div className='d-flex align-items-center justify-content-start flex-wrap flex-sm-nowrap mt-3 gap-3 pb-sm-5'>
                    <div className='input  me-3 position-relative'>
                        <input className='ps-5 p-1 rounded' type='email' name='email' id='emali' placeholder='example@gmail.com' />
                        <TbMailFast />
                    </div>
                    <Btn backgroundColor="#292930" color="white" title="Subscribe" hoverBack="#292930" />
                </div>
            </div>
        </div>
    )
}

export default Newsletter
