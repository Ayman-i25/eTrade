import ItemDetails from '../../../Components/ItemDetails/ItemDetails';
import SectionHeader from '../../../Components/Section-Header/SectionHeader'
import './MostSold.css'
import { FaStar } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";

import imag from '../../../assets/imgs/item (2).jpg'
import { MostSoldData } from '../../../data/mostSoldData';
import { Link } from 'react-router-dom';

const MostSold = () => {
    const itemShow = MostSoldData.map((item, index) => (
        <div className='col-xl-6' key={index}>
            <div class="card p-4 mb-4">
                <div class="row g-0">
                    <div class="col-sm-3">
                        <div className='image rounded'>
                            <Link to={`/products/${item.id}`}>
                                <img className='w-100 ' src={item.img} alt='a' />
                            </Link>
                        </div>
                    </div>
                    <div class="col-sm-4 ">
                        <div className='p-3 ps-sm-3 m-auto'>
                            <ItemDetails title={item.name} oldCost={item.oldCost} CurrentCost={item.currentCost} alignItems={window.innerWidth < 576 ? 'center' : 'start'} />
                        </div>
                    </div>
                    <div class="col-sm-5 m-auto">
                        <div className='d-flex align-items-end justify-content-center flex-column'>
                            <button><GoHeart /></button>
                            <button>Buy Product</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ))
    return (
        <div className='container'>
            <div className='mostSold-section my-5 py-5'>
                <div className='d-flex justify-content-center align-items-center mb-5 text-center '>
                    <SectionHeader spanIcone={<FaStar />} span='Most Sold' sectionName='Most Sold in eTrade Store' />
                </div>
                <div className='row'>
                    {itemShow}
                </div>

            </div>
        </div>
    )
}

export default MostSold

