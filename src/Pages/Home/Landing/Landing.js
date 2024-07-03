import './Landing.css'
import { AiTwotoneFire, AiOutlineShoppingCart } from "react-icons/ai";
import img1 from '../../../assets/imgs/item (1).jpg'
import img2 from '../../../assets/imgs/item (2).jpg'
import img3 from '../../../assets/imgs/item (3).jpg'
import { useRef, useState } from 'react';
import Btn from '../../../Components/btn/btn';
function Landing() {

    const images = [
        {
            image: img1,
            name: 'Lenovo i7',
            category: 'Labtop'
        },
        {
            image: img2,
            name: 'Lg monitor',
            category: 'Monitor'
        },
        {
            image: img3,
            name: 'Roco Wireless',
            category: 'Headphone'
        },
    ]
    const TextContent = useRef(null)
    let imageContainerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [trendName, trendNameItem] = useState(images[0].name)
    const [trendCategoryItem, setTrendCategoryItem] = useState(images[0].category)

    const scrollToImage = (index = 1) => {
        if (imageContainerRef.current) {
            const imageWidth = imageContainerRef.current.offsetWidth;
            imageContainerRef.current.scrollLeft = imageWidth * index;
            setActiveIndex(index);
        }

        
        // Immediately add the class back to start the animation
        TextContent.current.classList.add('hidden');
        
        // Use classList to remove the 'hidden' class with a delay
        setTimeout(() => {
            // Set the name and category based on the selected image
            trendNameItem(images[index].name);
            setTrendCategoryItem(images[index].category);
            TextContent.current.classList.remove('hidden');
        }, 300); 

    };



    const imageShow = images.map((img, index) => (
        <img key={index} src={img.image} alt='image' />
    ));
    return (
        <div className='landing'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div  className='col-lg-6 mb-3 mb-lg-0'>
                        <div ref={TextContent} className='text '>
                            <span className='span fw-bold'>
                                <AiTwotoneFire className='me-1' />
                                Hot Deal in This Week
                            </span>
                            <div className='display-1 fw-bold'>{trendName}</div>
                            <div className='display-1 fw-bold mb-4'>{trendCategoryItem}</div>
                            <Btn icone={<AiOutlineShoppingCart />} title='Shop Now' backgroundColor='white' hoverBack='white' color='black' width={'fit-content'} to={'/products'}/>

                        </div>
                    </div>
                    <div className='col-lg-6 d-flex flex-column align-items-center'>
                        <div className='items d-flex' >
                            <div className='item active ' ref={imageContainerRef}>
                                {imageShow}
                            </div>
                        </div>
                        <div className='button d-flex gap-1 mt-4 justify-content-center'>
                            <span
                                onClick={() => scrollToImage(0)}
                                className={activeIndex === 0 ? 'active' : ''}
                            ></span>
                            <span
                                onClick={() => scrollToImage(1)}
                                className={activeIndex === 1 ? 'active' : ''}
                            ></span>
                            <span
                                onClick={() => scrollToImage(2)}
                                className={activeIndex === 2 ? 'active' : ''}
                            ></span>
                        </div>
                    </div>
                </div>
            </div>
                <div className='texture'></div>
                <div className='texture'></div>
        </div>
    )
}

export default Landing
