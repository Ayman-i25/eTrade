import React, { useContext, useEffect } from 'react'
import ProductsDetails from '../../Components/ProductsDetails/ProductsDetails'
import Tabs from './Tabs/Tabs'
import ViewedItems from './Viewed-Items/ViewedItems'
import Newsletter from '../../Components/Newsletter/Newsletter'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
import Offer from '../../Components/Offer/Offer'
import { useParams } from 'react-router'
import Service from '../../Components/Service/Service'
import { ProductId } from '../../context/productIdContext'
const Product = () => {
    
    // get the product id from URL 
    const urlId = useParams()

    // seting the id on context 
    const {setId} = useContext(ProductId)
    setId(+urlId.id)
    
    return (
        <div>
            <NavBar />
            <Offer />
            <div className='mt-5'>
                <ProductsDetails />
            </div>
            <Tabs />
            <ViewedItems />
            <Newsletter />
            <Service />
            <Footer />
        </div>
    )
}

export default Product
