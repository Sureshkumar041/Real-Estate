import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import './buyer.css'

function BuyerComponent() {

    const [showlocation, setShowlocation] = useState([]),
        [showCart, setShowCart] = useState([]);
    const API = 'http://localhost:3333/realestate';

    const handleChange = (e) => {
        console.log("Handle change");
        console.log("NAME & VALUES: ", e.target.value);
        // setPropertyFor(e.target.value);
    }

    const profile = () => {
        return (
            <>
                <div>
                    <header>
                        <div className="row header bg-info bg-opacity-75">
                            <div className="col-2 my-4 my-2 text-dark">
                                <p className='mx-3 fs-4 fw-bold font-monospace'>Real Estate</p>
                            </div>
                            <div className="col-2 location my-2">
                                <select className="form-select rounded-pill" onChange={e => handleChange(e)}>
                                    {
                                        showlocation.map((item) => (
                                            <option value={item.location} onClick={e => handleChange(e)} name='locations' >{item.location}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="col-2 location my-2">
                                <select className="form-select rounded-pill" onChange={e => handleChange(e)}>
                                    <option defaultValue onChange={e => handleChange(e)}>Property type</option>
                                    <option value="Buy" onChange={e => handleChange(e)}>Buy</option>
                                    <option value="Rent" onChange={e => handleChange(e)}>Rent</option>
                                </select>
                            </div>
                            <div className='col start'>
                                <div className='col d-flex flex-row-reverse py-3 px-4'>
                                    <FaUser className='cursor-pointer fs-1' id='usericon' />
                                    <p className='my-2 mx-2 fs-5'>You </p>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
                <div className="bg-warning my-5 imageContent">
                    <p>Property</p>
                    {
                        showCart.map((item)=>(
                            <p>Property Inforamtion on the way</p>
                        ))
                    }
                </div>
            </>
        )
    }

    const cityMaster = () => {
        console.log("City master...!");
        const url = 'http://localhost:3333/realestate/showlocation';

        fetch(url)
            .then(async (res) => {
                const fetchData = await res.json();
                return fetchData;
            })
            .then(fetchData => {
                setShowlocation(fetchData.data.location)
                console.log('fetchData.data.location: ', fetchData.data.location);
            })
            .catch((err => {
                console.log("Show location: ", err.message);
            }))
    }

    const cartImage = (API) => {
        fetch('http://localhost:3333/realestate/cartimage')
            .then(async (res) => {
                const cart = await res.json();
                return cart;
            })
            .then((cart) => {
                console.log("Image data : ", cart.data);
                setShowCart(cart);
            })
            .catch((err)=>{
                console.log("Cart image: ",err.message);
            })
    }

    useEffect((e) => {
        cityMaster();
        cartImage(API);
    }, []);

    return (
        <>
            {profile()}
        </>
    )
}

export default BuyerComponent;