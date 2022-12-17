import './postproperty.css'
import Seller from '../SellerComponent/seller';
import { useState } from 'react';
import { json } from 'react-router';

export function Property() {

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState('');
    const [image, setImage] = useState('');
    const [type, setType] = useState('');
    const [sqft, setSqft] = useState('');
    const [rate, setRate] = useState('');
    const [info, setInfo] = useState('');


    const handleChange = async (e) => {
        if (e.target.files) {
            console.log("Files here...!", e.target.files);
            const files = [...e.target.files];
            const allImage = [];
            files.forEach(element => {
                console.log("2");
                allImage.push(element);
            });
            console.log("All image: ", allImage);
            setImage(allImage);
            // console.log("images: ", await image);
        }
    }

    const uploadPropery = (e) => {
        e.preventDefault();
        console.log("On Submit...!");
        console.log('Image: ',image);

        const formData = new FormData(document.getElementById('form'));
        // image.forEach(img => {
        //     formData.append("image", img);
        // });

        formData['image'] = image;
        console.log("Image array: ",formData['image']);
        const res = Object.fromEntries(formData);
        // const payload = JSON.stringify(res);

        let item;
        for(item of formData){
            console.log(item[0],item[1]);
        }

        // formData.forEach(element => {
        //     console.log(element);
        // });

        // formData.append('Address', address);
        // formData.append('City', city);
        // formData.append('State', state);
        // formData.append('Pin code', pincode);
        // formData.append('Image', image);
        // formData.append('Type', type);
        // formData.append('Sqft', sqft);
        // formData.append('Rate', rate);
        // formData.append('Description', info);

        // console.log("formdata real: ",formData.get('image'))

        setAddress('');
        setCity('');
        setImage('');
        setInfo('');
        setPincode('');
        setRate('');
        setSqft('');
        setState('');
        setType('');

        // console.log("Form data: ",await formData);

        const url = 'http://localhost:3333/realestate/property';
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(res)
        };

        fetch(url, requestOptions)
            .then(async res => {
                const fetchdata = await res.json();
                console.log("fetch", fetchdata);
                if (res.status >= 200 && res.status <= 299) {
                    alert('Property upload successfully...!');
                } else {
                    alert('Something went wrong...!')
                }
            })
            .catch(err => {
                console.log(err.message);
            })
    }


    return (
        <>
            <div className='postproperty'>
                <form className='form  mx-5 my-2' id='form'>
                    <div className='text-center'>
                        <h2>Post Property</h2>
                    </div>
                    <div className='row mx-2'>
                        <label>Address line</label>
                        <input className='form-control' name='address' onChange={e => setAddress(e.target.value)} />
                    </div>
                    <div className='row mx-2'>
                        <label>City</label>
                        <input className='form-control' name='city' onChange={e => setCity(e.target.value)} />
                    </div>
                    <div className='row px-2'>
                        <div className='col'>
                            <label>State</label>
                            <input className='form-control' name='state' onChange={e => setState(e.target.value)} />
                        </div>
                        <div className='col'>
                            <label>Pin code</label>
                            <input className='form-control' name='pincode' onChange={e => setPincode(e.target.value)} />
                        </div>
                    </div>
                    <div className='row mx-2'>
                        <label>Upload property photo</label>
                        <input className='form-control' multiple type='file' name='image' onChange={e => handleChange(e)} />
                    </div>
                    <div className='row mx-2 my-3'>
                        <select class="form-select" name='type' onChange={e => setType(e.target.value)}>
                            <option selected value='select anyone'>Choose property for</option>
                            <option value="Rent" >Rent</option>
                            <option value="Sell" >Sell</option>
                        </select>
                    </div>
                    <div className='row px-2'>
                        <div className='col'>
                            <label>Area (sq.ft)</label>
                            <input className='form-control' name='sqft' onChange={e => setSqft(e.target.value)} />
                        </div>
                        <div className='col'>
                            <label>Rate(per sq.ft)</label>
                            <input className='form-control' name='rate' onChange={e => setRate(e.target.value)} />
                        </div>
                    </div>
                    <div className='mx-2'>
                        <label>Description</label>
                        <textarea className='form-control' type='message' name='info' onChange={e => setInfo(e)} />
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