import SectionHeader from '../../../Components/Section-Header/SectionHeader'
import './DontMiss.css'
import { FaHeadphonesSimple } from "react-icons/fa6";
import React from 'react'
import CountDownTimer from '../../../Components/CountDownTimer/CountDownTimer';
import img2 from '../../../assets/imgs/my headphones with a crochet leaf _3-PhotoRoom.png-PhotoRoom.png'
import Btn from '../../../Components/btn/btn';
function DontMiss() {
  return (
    <div className='container'>
      <div className='dont-miss-section my-5'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <SectionHeader span="Don't Miss!!" spanIcone={<FaHeadphonesSimple />} sectionName="" showIcons={false} />
            <h1 className='display-3 fw-bolder mb-4'>Enhance Your Music Experience</h1>
            <CountDownTimer />
            <Btn title='Cheack it Out!' backgroundColor='#3577f0' hoverBack='#3577f0' color='white' width={'fit-content'} to={'/products'}/>
          </div>
          <div className='col-lg-6'>
            <img className='w-100' src={img2} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DontMiss
