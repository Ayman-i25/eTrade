import './Modal-product.css'
import React from 'react'
import { IoIosClose } from "react-icons/io";
import ProductsDetails from '../ProductsDetails/ProductsDetails';

const Modalproduct = () => {
    return (
        <div className='modal-prodcut'>
            <div className='modal fade ' id='staticBackdrop' tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className='modal-dialog  modal-dialog-centered p-5 '>
                    <div className='modal-content'>
                        <div className='modal-header justify-content-end p-3'>
                            <div className='icone ' data-bs-dismiss="modal" aria-label="Close">
                                <IoIosClose className=' fs-1 text-dark' />
                            </div>
                        </div>
                        <div className='modal-body pb-5'>
                            <ProductsDetails />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modalproduct
