import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Orders = () => {
    return (
        <div className='table-responsive'>

            <table class="table table-striped table-hover ">
                <thead>
                    <tr>
                        <th scope="col">Order</th>
                        <th scope="col">Date</th>
                        <th scope="col">Status</th>
                        <th scope="col">Total</th>
                        <th className='text-end pe-5' scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">#3524</th>
                        <td>October 16, 2023</td>
                        <td>Processing</td>
                        <td>$326.63 for 1 items</td>
                        <td className='text-end'><button><Link to='../order-detalis'>View</Link></button></td>
                    </tr>
                </tbody>
            </table>
            <Outlet />
        </div>
    )
}

export default Orders
