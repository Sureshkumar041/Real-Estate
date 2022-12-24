import AdminDashboard from '../AdminDashboard/admindashboard'
import './adminSellerMgmt.css'
import { useState, useEffect } from 'react';

const AdminSellerMgmt = () => {

    const [showCart, setShowCart] = useState([]);

    // Table header...!
    // const tableHeading = (showCart) => {
    //     const value = Object.keys(showCart[0]);
    //     for (let index = 0; index < value.length; index++) {
    //         console.log("IMAGE: ", value[index]);
    //     }
    //     return (
    //         <>
    //             <thead>
    //                 <tr>
    //                     {
    //                         value.map((item, index) => (
    //                             <th className='mx-2 bg-info border' key={index} >{item} </th>
    //                         ))
    //                     }
    //                 </tr>
    //             </thead>
    //         </>
    //     )
    // }

    // Table body...!
    // const tableBody = (value) => {
    //     return (
    //         <>
    //             {
    //                 showCart.map((item, index) => (
    //                     <tr className='table border' key={index} >
    //                         {
    //                             showCart.map((item, index) => (
    //                                 <td key={index}>{item.type} </td>
    //                             ))
    //                         }
    //                     </tr>
    //                 ))
    //             }
    //         </>
    //     )
    // }

    const SellerDetails = (showCart) => {
        console.log("showCart: ", showCart);
        // const value = Object.keys(showCart[0]);
        // for (let index = 0; index < value.length; index++) {
        //     console.log("IMAGE: ", value[index]);
        // }
        return (
            <>
                <div className='sellermgmt'>
                    <div>
                        {/* <p>Admin seller Manangement</p> */}
                    </div>
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