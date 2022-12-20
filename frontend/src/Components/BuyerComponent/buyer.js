import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import './buyer.css'

function HomePage() {

    const [showlocation, setShowlocation] = useState([]);


    // const cityMaster = async () => {
    //     console.log("City master...!");
    //     const url = 'http://localhost:3333/realestate/showlocation';

    //     fetch(url)
    //         .then(async (res) => {
    //             const fetchData = await res.json();

    //             console.log("Fetch data: ", showlocation);
    //             return setShowlocation(fetchData.data.location);
    //         })
    //         .catch((err => {
    //             console.log("Show location: ", err.message);
    //         }))
    // }

    const handleChange = (e) => {

        console.log("NAME & VALUES: ", e.target.name, e.target.value);
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
                            <select className="form-select rounded-pill">
                                <option defaultValue onChange={e => handleChange(e)} name='location'>Choose the location</option>
                                {
                                    showlocation.map((item) => (
                                        <option value={item.location} onChange={e => handleChange(e)} name='locations' >{item.location}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="col-2 location my-2">
                            <select className="form-select rounded-pill">
                                <option defaultValue>Property type</option>
                                <option value="Chennai">Buy</option>
                                <option value="Salem">Rent</option>
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
            </div></>
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