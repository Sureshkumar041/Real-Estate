import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import './buyer.css'

function HomePage() {

    const [userDetails, setUserDetails] = useState('');

    useEffect(() => {
        setUserDetails(JSON.parse(localStorage.getItem('userdetails')))
        console.log("UserName: ", userDetails)
        return ;
    }, [userDetails]);

    return (
        <div>
            <header>
                <div class="row header bg-info bg-opacity-75">
                    <div class="col-2 my-4 my-2 text-dark">
                        <p className='mx-3 fs-4 fw-bold font-monospace'>Real Estate</p>
                    </div>
                    <div class="col-2 location my-2">
                        <select class="form-select rounded-pill">
                            <option selected>Choose the location</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Salem">Salem</option>
                            <option value="Coimbatore">Coimbatore</option>
                        </select>
                    </div>
                    <div class="col-2 location my-2">
                        <select class="form-select rounded-pill">
                            <option selected>Property type</option>
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
        </div>
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