import SectionHeader from '../../../Components/Section-Header/SectionHeader'
import './Category.css'
import React, { useRef } from 'react'
// import SlickSlider from './SlickSlider'
import SlickSlider from './SlickSlider'
import { AiFillTags } from "react-icons/ai";
import PrevAndNextIcone from '../../../Components/Prev-Next-icon/PrevAndNextIcone'
import { motion, useInView } from "framer-motion"

function Category() {
    // const show = category.map((ele) => (
    //     <div className='item'>
    //         <image>
    //             <img src={ele.image} className='w-100' />
    //         </image>
    //         <span>{ele.name}</span>
    //     </div>
    // ))

    // framer motion
    const ref = useRef(null)
    // const isInView = useInView(ref, { once: true })
    // style={{
    //     transform: isInView ? "none" : "translateX(1600px)",
    //     opacity: isInView ? 1 : 0,
    //     transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    // }}
    return (

        <div >
            <motion.div
                ref={ref}

                className="Categoris my-5" >
                <div className='container '>
                    <div className='d-flex justify-content-between align-items-center'>
                        <SectionHeader span='Categories' sectionName='Browse by Category' spanIcone={<AiFillTags />} />
                        <PrevAndNextIcone navigation_prev='category-prev' navigation_next='category-next' />
                    </div>
                    <div className='category-holder d-flex align-items-center gap-3 pt-3'>
                        <SlickSlider />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Category
