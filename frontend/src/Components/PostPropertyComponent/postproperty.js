import './postproperty.css'
import Seller from '../SellerComponent/seller';
import { useState } from 'react';

export function Property() {

    const [propertyDetails, setPropertyDetails] = useState({
        address: '',
        city: '',
        state: '',
        pincode: '',
        image: '',
        type: '',
        sqft: '',
        rate: '',
        info: ''
    })

    const [images, setImage] = useState([])

    const handleChange = async (e) => {
        if (e.target.files) {
            console.log("Files here...!",e.target.files);
            const files =[...e.target.files];
            const allImage =[];
            files.forEach(element => {
                console.log("2");
                allImage.push(element);
            });
            console.log("All image: ",allImage);
            setImage({ allImage});
            console.log("images: ", await images);   
        }
        setPropertyDetails({ ...propertyDetails, [e.target.name]: e.target.value });
        console.log("propertyDetails: ", await propertyDetails);
    }

    const uploadPropery = async (e) => {
        e.preventDefault();

        console.log("Imgaes on submit: ",images.values);

        console.log("propertyDetails submit: ", propertyDetails);
        // const url = 'http://localhost:3333/realestate/property';
        // const requestOptions = {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(propertyDetails)
        // };

        // await fetch(url, requestOptions)
        //     .then(async res => {
        //         const fetchdata = await res.json();
        //         console.log("fetch", fetchdata);
        //         if (res.status >= 200 && res.status <= 299) {
        //             alert('Property upload successfully...!');
        //         } else {
        //             alert('Something went wrong...!')
        //         }
        //     })
        //     .catch(err => {
        //         console.log(err.message);
        //     })
    }


    return (
        <>
            <div className='postproperty'>
                <form className='form  mx-5 my-2'>
                    <div className='text-center'>
                        <h2>Post Property</h2>
                    </div>
                    <div className='row mx-2'>
                        <label>Address line</label>
                        <input className='form-control' name='address' onChange={e => handleChange(e)}></input>
                    </div>
                    <div className='row mx-2'>
                        <label>City</label>
                        <input className='form-control' name='city' onChange={e => handleChange(e)}></input>
                    </div>
                    <div className='row px-2'>
                        <div className='col'>
                            <label>State</label>
                            <input className='form-control' name='state' onChange={e => handleChange(e)}></input>
                        </div>
                        <div className='col'>
                            <label>Pin code</label>
                            <input className='form-control' name='pincode' onChange={e => handleChange(e)}></input>
                        </div>
                    </div>
                    <div className='row mx-2'>
                        <label>Upload property photo</label>
                        <input className='form-control' multiple type='file' name='image' onChange={e => handleChange(e)}></input>
                    </div>
                    <div className='row mx-2 my-3'>
                        <select class="form-select" name='type' onChange={e => handleChange(e)}>
                            <option selected value='select anyone' onChange={e => handleChange(e)}>Choose property for</option>
                            <option value="Rent" onChange={e => handleChange(e)}>Rent</option>
                            <option value="Sell" onChange={e => handleChange(e)}>Sell</option>
                        </select>
                    </div>
                    <div className='row px-2'>
                        <div className='col'>
                            <label>Area (sq.ft)</label>
                            <input className='form-control' name='sqft' onChange={e => handleChange(e)}></input>
                        </div>
                        <div className='col'>
                            <label>Rate(per sq.ft)</label>
                            <input className='form-control' name='rate' onChange={e => handleChange(e)}></input>
                        </div>
                    </div>
                    <div className='mx-2'>
                        <label>Description</label>
                        <textarea className='form-control' type='message' name='info' onChange={e => handleChange(e)}></textarea>
                    </div>
                    <div className='row my-3 mx-2'>
                        <button className='col btn bg-secondary text-light  mx-4'>Cancel</button>
                        <button className='col btn bg-info mx-4' onClick={e => uploadPropery(e)}> Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

function PostProperty() {

    return (
        <>
            <Seller />
            <Property />
        </>
    )
}

export default PostProperty;