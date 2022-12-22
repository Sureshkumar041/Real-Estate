import './postproperty.css'
import Seller from '../SellerComponent/seller';
import React, { useState, useEffect } from 'react';

export function PostProperty() {
    const API = 'http://localhost:3333'

    const [address, setAddress] = useState(''),
        [city, setCity] = useState(''),
        [state, setState] = useState(''),
        [pincode, setPincode] = useState(''),
        [image, setImage] = useState([]),
        [type, setType] = useState(''),
        [sqft, setSqft] = useState(''),
        [rate, setRate] = useState(''),
        [info, setInfo] = useState(''),
        [propertyFor, setpropertyFor] = useState(''),
        [showlocation, setShowlocation] = useState([]);


    const handleChange = async (e) => {
        const files = e.target.files;
        var multipleFiles = [];
        [...files].forEach(element => {
            multipleFiles.push(element);
        });
        setImage(multipleFiles);
    }

    const createPro = (product) => {
        return fetch(`${API}/realestate/property`, {
            method: "post",
            headers: {
                Accept: "application/json",
            },
            body: product,
        })
            .then((response) => {
                return response.json();
            })
            .catch((err) => console.log(err));
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('address', address);
        formData.append('city', city);
        formData.append('state', state);
        formData.append('pincode', pincode);
        // formData.append('image', image);
        image.forEach(element => {
            formData.append('image', element);
        });
        formData.append('propertyFor', propertyFor)
        formData.append('type', type);
        formData.append('sqft', sqft);
        formData.append('rate', rate);
        formData.append('info', info);
        setCity('');
        setAddress('');
        setImage('');
        setInfo('');
        setType('');
        setRate('');
        setSqft('');
        setPincode('');
        setpropertyFor('');
        setState('');

        await createPro(formData).then((res) => {
            console.log('res', res)
            alert(res.message);
        }).catch((res) => {
            alert(res.message)
        })
    }

    const cityMaster = () => {
        const url = 'http://localhost:3333/realestate/showlocation';
        fetch(url)
            .then(async (res) => {
                const fetchData = await res.json();
                return fetchData;
            })
            .then(fetchData => {
                setShowlocation(fetchData.data.location)
            })
            .catch((err => {
                console.log("Show location: ", err.message);
            }))
    }

    useEffect((e) => {
        cityMaster();
    }, []);

    // Property Upload form ...!
    const propertyForm = () => {
        return (
            <>
                <div className='postproperty'>
                    <form className='form  mx-5 my-2' id='form' onSubmit={e => onSubmit(e)}>
                        <div className='text-center py-2'>
                            <h2>Post Property</h2>
                        </div>
                        <div className='row mx-2 my-2'>
                            <select className="form-select" onChange={e => setCity(e.target.value)} name='city' required>
                                <option defaultValue>Select the city</option>
                                {
                                    showlocation.map((item) => (
                                        <React.Fragment key={item.no} >
                                            <option>{item.location}</option>
                                        </React.Fragment>
                                    ))
                                }
                            </select>
                        </div>
                        <div className='row mx-2 '>
                            <label>Address line</label>
                            <input className='form-control' name='address' onChange={e => setAddress(e.target.value)} required />
                        </div>
                        <div className='row px-2'>
                            <div className='col'>
                                <label>State</label>
                                <input className='form-control' name='state' onChange={e => setState(e.target.value)} required />
                            </div>
                            <div className='col'>
                                <label>Pin code</label>
                                <input className='form-control' type='number' name='pincode' onChange={e => setPincode(e.target.value)} required />
                            </div>
                        </div>
                        <div className='row mx-2'>
                            <label>Upload property photo</label>
                            <input className='form-control' multiple type='file' name='image' onChange={e => handleChange(e)} />
                        </div>
                        <div className='row mx-1 my-3'>
                            <select className="col form-select mx-2" name='propertyFor' onChange={e => setpropertyFor(e.target.value)} required>
                                <option defaultValue={"select value"} value='select anyone'>Choose property for</option>
                                <option value="Rent" >Rent</option>
                                <option value="Sell" >Sell</option>
                            </select>
                            <select className="col form-select mx-2" name='type' onChange={e => setType(e.target.value)} required>
                                <option defaultValue value='1 BHK'>1 BHK</option>
                                <option value="2 BHK" > 2 BHK</option>
                                <option value="3 BHK" >3 BHK</option>
                            </select>
                        </div>
                        <div className='row px-2'>
                            <div className='col'>
                                <label>Area (sq.ft)</label>
                                <input className='form-control' name='sqft' onChange={e => setSqft(e.target.value)} required />
                            </div>
                            <div className='col'>
                                <label>Rate(per sq.ft)</label>
                                <input className='form-control' name='rate' onChange={e => setRate(e.target.value)} required />
                            </div>
                        </div>
                        <div className='mx-2'>
                            <label>Description</label>
                            <textarea className='form-control' type='message' name='info' onChange={e => setInfo(e.target.value)} required />
                        </div>
                        <div className='row my-3 mx-2'>
                            <button className='col btn bg-secondary text-light  mx-4'>Cancel</button>
                            <button className='col btn bg-info mx-4' type='submit'> Submit</button>
                        </div>
                    </form>
                </div>
            </>
        )
    }

    return (
        <>
            <Seller />
            {propertyForm()}
        </>
    )
}

export default PostProperty;