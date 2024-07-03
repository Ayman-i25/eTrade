import './PrevAndNextIcone.css'
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

function PrevAndNextIcone({navigation_prev, navigation_next}) {
    return (
        <div className='slider-controler'>
            <div className='d-flex gap-1'>
                <div  id={navigation_prev} className='slide-icone prev'>
                    <FaArrowLeftLong className='' />
                </div>
                <div id={navigation_next} className='slide-icone next'>
                    <FaArrowRightLong className='next' />
                </div>
            </div>
        </div>
    )
}

export default PrevAndNextIcone
