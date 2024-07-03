import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
const Wishlist = () => {
    return (
        <div style={{height:'100vh'}} className='d-flex flex-column justify-content-between'>
            <NavBar bgColor={'white'}/>
            <h2 className='my-5 py-5 text-center'>There Is No Wishlist</h2>
            <Footer />
        </div>
    )
}

export default Wishlist
