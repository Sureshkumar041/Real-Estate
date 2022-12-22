import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import './buyer.css'
import PropertyCart from "../UserComponent/PropertyComponent/PropertyComponent/propertyCartApi";

function BuyerComponent() {

    const [showlocation, setShowlocation] = useState([]),
        [token, setToken] = useState(false);

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
                                <p className='mx-3 fs-4 my-2 fw-bold font-monospace'>Real Estate</p>
                            </div>
                            <div className="col-2 location my-2">
                                <select className="form-select rounded-pill" onChange={e => handleChange(e)}>
                                    {
                                        showlocation.map((item) => (
                                            <option value={item.location} key={item._id} onClick={e => handleChange(e)} name='locations' >{item.location}</option>
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
                            {token ? authenticated() : entryProfile()}
                        </div>
                    </header>
                </div>
            </>
        )
    }

    // Guest Login
    const entryProfile = () => {
        return (
            <React.Fragment>
                <div className='col d-flex flex-row-reverse py-3 px-4'>
                    <Link to={'/realestate/signup'} className='d-flex flex-row-reverse text-decoration-none'>
                        <button className='btn bg-white'>Login / Signup</button>
                    </Link>
                </div>
            </React.Fragment>
        )
    }

    // Authenication
    const authenticated = () => {
        return (
            <React.Fragment>
                <div className='col start'>
                    <div className='col d-flex flex-row-reverse py-3 px-4'>
                        <FaUser className='cursor-pointer fs-1' id='usericon' />
                        <p className='my-2 mx-2 fs-5'>You </p>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    // Get location data
    const cityMaster = () => {
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

    // Buyer...!
    const tokenValidate = () => {
        if (JSON.parse(localStorage.getItem('token'))) {
            setToken(true);
        }
    }

    useEffect((e) => {
        cityMaster();
        tokenValidate();
    }, []);

    return (
        <>
            {profile()}
            <PropertyCart />
        </>
    )
}

export default BuyerComponent;