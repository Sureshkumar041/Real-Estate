import AdminDashboard from '../AdminDashboard/admindashboard'
import './adminSellerMgmt.css'
import { useState, useEffect } from 'react';

const AdminSellerMgmt = () => {

    const [showCart, setShowCart] = useState([]);

    const SellerDetails = (showCart) => {
        console.log("showCart: ", showCart);
        return (
            <>
                <div className='sellermgmt'>
                    <div className='sellerDetails'>
                        <table className='table table-hover'>
                            <thead className='bg-info border' >
                                <tr>
                                    <th className='border-0 bg-info' >SI.No</th>
                                    <th className='bg-info'>Address</th>
                                    <th className='bg-info'>City</th>
                                    <th>State</th>
                                    <th>Property for</th>
                                    <th>Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    showCart.map((item, index) => (
                                        <tr key={index}>
                                            <td>{index + 1} </td>
                                            <td>{item.address} </td>
                                            <td>{item.city} </td>
                                            <td>{item.state} </td>
                                            <td>{item.propertyFor} </td>
                                            <td>{item.type} </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div >
            </>
        )
    }

    const cartImage = (API) => {
        fetch('http://localhost:3333/realestate/cartimage')
            .then(async (res) => {
                const cart = await res.json();
                return cart;
            })
            .then((cart) => {
                console.log("Image data : ", cart.data);
                setShowCart(cart.data);
            })
            .catch((err) => {
                console.log("Cart image: ", err.message);
            })
    }

    useEffect((e) => {
        cartImage();
    }, [])

    return (
        <>
            <AdminDashboard />
            {SellerDetails(showCart)}
        </>
    )
}

export default AdminSellerMgmt;