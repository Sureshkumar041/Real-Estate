import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import './buyer.css'

function HomePage() {

    const [showlocation, setShowlocation] = useState([]);
    const [propertyFor, setPropertyFor] = useState([]);

    const handleChange = (e) => {
        console.log("Handle change");
        console.log("NAME & VALUES: ", e.target.name, e.target.value);
        // setPropertyFor(e.target.value);
        // console.log("FOR: ",propertyFor);
    }

    useEffect((e) => {
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
        cityMaster();
    }, []);

    return (

        <>
            <div>
                <header>
                    <div className="row header bg-info bg-opacity-75">
                        <div className="col-2 my-4 my-2 text-dark">
                            <p className='mx-3 fs-4 fw-bold font-monospace'>Real Estate</p>
                        </div>
                        <div className="col-2 location my-2">
                            <select className="form-select rounded-pill" onChange={e=>handleChange(e)}>
                                <option defaultValue onClick={e => handleChange(e)}  name='location'>Choose the location</option>
                                {
                                    showlocation.map((item) => (
                                        <option value={item.location} onClick={e => handleChange(e)} name='locations' >{item.location}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="col-2 location my-2">
                            <select className="form-select rounded-pill" onChange={e=>handleChange(e)}>
                                <option defaultValue onChange={e=>handleChange(e)}>Property type</option>
                                <option value="Buy" onChange={e=>handleChange(e)}>Buy</option>
                                <option value="Rent" onChange={e=>handleChange(e)}>Rent</option>
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
                <div className="row my-5 mx-5">
                    <div className="col-6 ">
                        <table className="table table-hover table-bordered bg-warning border-primary bg-opacity-75 text-center">
                            <thead>
                                <th>location</th>
                                <th>Action</th>
                            </thead>
                            <tbody>
                                {showlocation.map((item) => (
                                    <tr>
                                        <td>{item.location}</td>
                                        <td>
                                            <button className="btn bg-danger text-white">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}


function BuyerComponent() {
    return (
        <>
            <HomePage />
        </>
    )
}

export default BuyerComponent;