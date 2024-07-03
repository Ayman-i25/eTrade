import { useContext, useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import Btn from "../btn/btn";
import { FaHeart } from "react-icons/fa";
import './ProductsDetails.css'
import { productsData } from "../../data/productsData";
import { ProductId } from "../../context/productIdContext";

const ProductsDetails = () => {
    const {id} = useContext(ProductId)
    console.log(id)
    useEffect(() =>{
    },[])
    const theProduct = productsData.find((ele) => ele.id === id)

    // const colorKeys = Object.keys(ele.colors);
    // const ColorSpan = colorKeys.map((index, colorKey) => (
    //     <span key={index} style={{ backgroundColor: ele.colors[colorKey] }}></span>
    // ))

    
    let [count, setCount] = useState(0)
    const increaseCount = () => {
        setCount(count + 1)
    }
    const decreaseCount = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }


    return (
        <div className="ProductsDetails-section">
            <div className="container">
                {theProduct && <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="row align-items-center">
                            <div className="col-lg-2 order-2 order-lg-1">
                                <img className="smailImage w-100" src={theProduct.img} alt="Product Image" />
                                <img className="smailImage w-100" src={theProduct.img} alt="Product Image" />
                                <img className="smailImage w-100" src={theProduct.img} alt="Product Image" />
                                <img className="smailImage w-100" src={theProduct.img} alt="Product Image" />
                            </div>
                            <div className=" col-lg-10 order-1 order-lg-2">
                                <img className="w-100" src={theProduct.img} alt="Product Image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div key={theProduct.id}>
                            <h1>{theProduct.name}</h1>
                            <h3 className="my-3 fw-bold">{theProduct.currentCost}$</h3>
                            <ul className="m-0 mb-3 p-0">
                                <li>
                                    <FaCheck /> In stock
                                </li>
                                <li>
                                    <FaCheck /> Free delivery available
                                </li>
                                <li>
                                    <FaCheck /> Sales 30% Off Use Code: MOTIVE30
                                </li>
                            </ul>
                            <p>
                                In ornare lorem ut est dapibus, ut tincidunt nisi pretium. Integer ante est, elementum eget magna. Pellentesque sagittis dictum libero, eu dignissim tellus.
                            </p>
                            {/* <h4>Colors: {ColorSpan}</h4> */}
                            <div className="size d-flex  align-items-center  mb-3">
                                <h5 className="pe-2">Size:</h5>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                    <input type="radio" name="size" id="xl-size" />
                                    <label htmlFor='xl-size' className="the-size">XL</label>
                                    <input type="radio" name="size" id="l-size" />
                                    <label htmlFor='l-size' className="the-size">L</label>
                                    <input type="radio" name="size" id="m-size" />
                                    <label htmlFor='m-size' className="the-size">M</label>
                                    <input type="radio" name="size" id="s-size" />
                                    <label htmlFor='s-size' className="the-size">S</label>
                                    <input type="radio" name="size" id="xs-size" />
                                    <label htmlFor='xs-size' className="the-size">XS</label>
                                </div>
                            </div>
                            <div className="product-action " >
                                <div className="row align-items-center">
                                    <div className="col-12 col-lg-3 mb-3">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <div className="decreaseBtn" onClick={decreaseCount}>-</div>
                                            <div className="fs-5 px-2">{count}</div>
                                            <div className="increaseBtn" onClick={increaseCount}>+</div>
                                        </div>
                                    </div>
                                    <div className="col-9 col-lg-6">
                                        <div className="w-100 position-relative" style={{zIndex:'3'}}>
                                            <Btn backgroundColor='#3577f0' color='white' title='Add To Cart' hoverBack='#3577f0' icone={false} padding='14px 24px' />
                                        </div>
                                    </div>
                                    <div className="col-3 col-lg-3">
                                        <div className="likeBtn"><FaHeart /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    );
};

export default ProductsDetails;
