import { useEffect, useState } from "react";
import Seller from "../seller";
import './manageseller.css'
import notFound from '../../../Image/icons8-error-cloud.gif'
import { useNavigate } from 'react-router-dom'
// import { FaEdit, FaDelete } from 'react-icons/fa'

function MyProperty() {
    const API = 'http://localhost:3333/realestate';
    const token = JSON.parse(localStorage.getItem('token'));
    const navigate = useNavigate();
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
        [getPoperty, setGetProperty] = useState([]),
        [editProperty, setEditProperty] = useState([]),
        [showlocation, setShowlocation] = useState([]),
        [showProperty, setShowProperty] = useState([]),
        [showPropertyType, setShowPropertyType] = useState([]),
        [editFormVisibility, setEditFormVisibility] = useState(false),
        [propertyAvailable, setPropertyAvailable] = useState(false);


    const handleChange = async e => {
        const files = e.target.files
        var multipleFiles = [];
        [...files].forEach(element => {
            multipleFiles.push(element)
        })
        setImage(multipleFiles)
    }

    const getOwnProperty = async () => {
        const sellerData = JSON.parse(localStorage.getItem('userdetails'));
        const id = sellerData.id;
        const token = JSON.parse(localStorage.getItem('token'));
        console.log("Seller id get: ", id, 'Tpken: ', token);
        await fetch(`${API}/ownproperty/${id}`, {
            headers: {
                Accept: 'application/json',
                Authorization: token
            }
        })
            .then(async (res) => {
                const fetchData = await res.json();
                if (res.status >= 199 && res.status < 300) {
                    console.log('if part...!');
                    console.log("Length: ", (fetchData.data.data).length);
                    if ((fetchData.data.data).length === 0) {
                        setPropertyAvailable(true)
                    } else {
                        setGetProperty(fetchData.data.data)
                    }
                } else {
                    console.log("Datas: ", fetchData.data);
                    if (window.confirm('Login again')) {
                        console.log("Okay");
                        navigate('/realestate/login')
                    } else {
                        console.log("Else");
                    }
                }
            })
            .catch(err => {
                console.log('Get own property : ', err.message);
            })
    }

    const noProperty = () => {
        return (
            <>
                <div className="noproperty">
                    <h3>Still not upload any property</h3>
                    <img src={notFound} alt="No_image" className="px-5 error" ></img>
                </div>
            </>
        )
    }

    const createPro = product => {
        const token = JSON.parse(localStorage.getItem('token'));
        console.log('Token: ', token);
        return fetch(`${API}/property`, {
            method: 'post',
            headers: {
                Accept: 'application/json',
                Authorization: token
            },
            body: product
        })
            .then(response => {
                return response.json()
            })
            .catch(err => console.log(err))
    }

    const onSubmit = async e => {
        e.preventDefault()
        const sellerData = JSON.parse(localStorage.getItem('userdetails'));
        let formData = new FormData()
        formData.append('address', address)
        formData.append('city', city)
        formData.append('state', state)
        formData.append('pincode', pincode)
        // formData.append('image', image);
        image.forEach(element => {
            formData.append('image', element)
        })
        formData.append('propertyFor', propertyFor)
        formData.append('type', type)
        formData.append('sqft', sqft)
        formData.append('rate', rate)
        formData.append('info', info)
        formData.append('sellerId', sellerData.id)
        setCity('')
        setAddress('')
        setImage('')
        setInfo('')
        setType('')
        setRate('')
        setSqft('')
        setPincode('')
        setpropertyFor('')
        setState('')
        await createPro(formData)
            .then(res => {
                console.log('res', res)
                alert(res.message)
                e.target.reset()
            })
            .catch(res => {
                alert(res.message)
            })
    }

    const updateproperty = () => {
        console.log('Update property...!', editProperty);
        return (
            <>
                <div className="edit bg-info">
                    <h4>Edit ur property</h4>
                    <div className='editProperty'>
                        {
                            editProperty.map((item, index) => (
                                <form
                                    className='form  mx-5 my-2'
                                    id='form'
                                    onSubmit={e => onSubmit(e)}
                                    key={index}
                                >
                                    <div className='text-center py-2'>
                                        <h2>Edit Property</h2>
                                    </div>
                                    <div className='row mx-2 my-2'>
                                        <select
                                            className='form-select'
                                            onChange={e => setCity(e.target.value)}
                                            name='city'
                                            required
                                        >
                                            <option >Select the city</option>
                                            {showlocation.map((item, index) => (
                                                <option key={index} >{item.location}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='row mx-2 '>
                                        <label>Address line</label>
                                        <input
                                            className='form-control'
                                            name='address'
                                            placeholder='Enter the street name'
                                            onChange={e => setAddress(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className='row px-2'>
                                        <div className='col'>
                                            <label>State</label>
                                            <input
                                                className='form-control'
                                                name='state'
                                                placeholder='Enter the state'
                                                onChange={e => setState(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className='col'>
                                            <label>Pin code</label>
                                            <input
                                                className='form-control'
                                                type='number'
                                                placeholder='Enter the pincode'
                                                name='pincode'
                                                onChange={e => setPincode(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className='row mx-2'>
                                        <label>Upload property photo</label>
                                        <input
                                            className='form-control'
                                            multiple
                                            type='file'
                                            name='image'
                                            onChange={e => handleChange(e)}
                                        />
                                    </div>
                                    <div className='row mx-1 my-3'>
                                        <select
                                            className='col form-select mx-2'
                                            name='propertyFor'
                                            onChange={e => setpropertyFor(e.target.value)}
                                            required
                                        >
                                            <option value='select anyone'>Choose property for</option>
                                            {showProperty.map((item, index) => (
                                                <option key={index} value={item.propertyFor}>
                                                    {' '}
                                                    {item.propertyFor}{' '}
                                                </option>
                                            ))}
                                        </select>
                                        <select
                                            className='col form-select mx-2'
                                            name='type'
                                            onChange={e => setType(e.target.value)}
                                            // defaultValue={item.propertyType}
                                            required
                                        >
                                            <option value='null'>Property type</option>
                                            {
                                                showPropertyType.map((items, index) => (
                                                    <option key={index} >{items.propertyType} </option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className='row px-2'>
                                        <div className='col'>
                                            <label>Area (sq.ft)</label>
                                            <input
                                                className='form-control'
                                                name='sqft'
                                                placeholder='Enter the sqft'
                                                onChange={e => setSqft(e.target.value)}
                                                defaultValue={item.sqft}
                                                required
                                            />
                                        </div>
                                        <div className='col'>
                                            <label>Rate(per sq.ft)</label>
                                            <input
                                                className='form-control'
                                                name='rate'
                                                placeholder='Enter the rate'
                                                onChange={e => setRate(e.target.value)}
                                                defaultValue={item.rate}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className='mx-2'>
                                        <label>Description</label>
                                        <textarea
                                            className='form-control'
                                            type='message'
                                            name='info'
                                            placeholder='Enter the description...'
                                            onChange={e => setInfo(e.target.value)}
                                            defaultValue={item.info}
                                            required
                                        />
                                    </div>
                                    <div className='row my-3 mx-2'>
                                        <button className='col btn bg-secondary text-light  mx-4'>
                                            Cancel
                                        </button>
                                        <button className='col btn bg-info mx-4' type='submit'>
                                            {' '}
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            ))
                        }
                    </div>
                </div>
            </>
        )
    }

    const actionProperty = async (id, path, method) => {
        if (method === 'delete') {
            if (window.confirm('You want to delete this property ?')) {
                await fetch(`${API}/${path}/${id}`, {
                    method: method,
                    headers: {
                        Accept: 'application/json',
                        Authorization: token
                    }
                })
                    .then(async res => {
                        const fetchData = await res.json();
                        console.log("Fetch data sellermgmt: ", fetchData);
                        if (res.status >= 199 && res.status < 300) {
                            alert(fetchData.data.data);
                            getOwnProperty();
                        }
                        else {
                            alert(fetchData.data.message);
                        }
                    })
                    .catch(err => {
                        console.log("SELLER MGMT: ", err.message);
                    })
            }
        } else {
            setEditFormVisibility(!editFormVisibility);
            await fetch(`${API}/${path}/${id}`, {
                method: method,
                headers: {
                    Accept: 'application/json',
                    Authorization: token
                }
            })
                .then(async res => {
                    const fetchData = await res.json();
                    console.log("Fetch data EDit: ", fetchData);
                    if (res.status >= 199 && res.status < 300) {
                        // alert(fetchData.data.data);
                        // getOwnProperty();
                        // alert('Edit')
                        setEditProperty([fetchData.data.data]);
                        updateproperty();
                    }
                    else {
                        // alert(fetchData.data.message);
                        alert('Dont')
                    }
                })
                .catch(err => {
                    console.log("SELLER MGMT Edit: ", err.message);
                })
        }
    }

    const SellerDetails = () => {
        console.log("getPoperty in table: ", getPoperty);
        return (
            <>
                <div className='propertymgmt'>
                    <div className='propertyDetails'>
                        <table className='table table-hover'>
                            <thead className='bg-info border' >
                                <tr>
                                    <th className='border-0 bg-info' >SI.No</th>
                                    <th className='bg-info'>Address</th>
                                    <th className='bg-info'>City</th>
                                    <th>State</th>
                                    <th>Property for</th>
                                    <th>Type</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    getPoperty.map((item, index) => (
                                        <tr key={index}>
                                            <td>{index + 1} </td>
                                            <td>{item.address} </td>
                                            <td>{item.city} </td>
                                            <td>{item.state} </td>
                                            <td>{item.propertyFor} </td>
                                            <td>{item.type} </td>
                                            <td>
                                                <button className="btn bg-info px-2" onClick={() => actionProperty(item._id, 'editproperty', 'get')}>Edit</button>
                                                <button className="btn bg-danger mx-3" onClick={() => actionProperty(item._id, 'deleteproperty', 'delete')}>Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div >
                {editFormVisibility ? updateproperty() : null}
            </>
        )
    }

    const cityMaster = () => {
        const url = 'http://localhost:3333/realestate/showlocation'
        fetch(url)
            .then(async res => {
                const fetchData = await res.json()
                return fetchData
            })
            .then(fetchData => {
                setShowlocation(fetchData.data.location)
            })
            .catch(err => {
                console.log('Show location: ', err.message)
            })
    }

    // Get property
    const getProperty = () => {
        console.log('City master...!')
        fetch(`${API}/showpropertyfor`)
            .then(async res => {
                const fetchData = await res.json()
                return fetchData
            })
            .then(fetchData => {
                setShowProperty(fetchData.data.data)
                console.log('Show property for : ', fetchData.data.data)
            })
            .catch(err => {
                console.log('Show location: ', err.message)
            })
    }

    const getPropertyType = async (path) => {
        await fetch(`${API}/${path}`)
            .then(async res => {
                const fetchData = await res.json();
                return fetchData;
            })
            .then(fetchData => {
                console.log('Get property type: ', fetchData)
                setShowPropertyType(fetchData.data.data);
            })
            .catch(err => {
                console.log("Get property type: ", err);
            })
    }

    useEffect(() => {
        getOwnProperty()
        cityMaster()
        getProperty()
        getPropertyType('showpropertytype')
    }, [])

    return (
        <>
            <Seller />
            {propertyAvailable ? noProperty() : SellerDetails()}
        </>
    )
}

export default MyProperty;