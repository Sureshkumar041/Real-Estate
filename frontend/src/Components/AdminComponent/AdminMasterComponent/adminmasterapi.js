import { useState } from "react";
import { Dashboard } from "../AdminDashboard/admindashboard";
import './adminmasterapi.css'

const AdminMaster = () => {

    const [location, setLocation] = useState();

    const addLocation = async (e) => {
        e.preventDefault();
        console.log("ADD LOCATION START...!");
        console.log("LOcation: ", location);

        try {

            const addLocation = {
                location
            };
            const url = 'http://localhost:3333/realestate/addlocation';
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(addLocation)
            };

            fetch(url, requestOptions)
                .then(async (res) => {
                    const fetchData = await res.json();
                    console.log("Response: ", fetchData);
                    if (fetchData.data.status >= 199 && fetchData.data.status < 300) {
                        alert(fetchData.data.message)
                    }
                    else {
                        alert(fetchData.data.message);
                    }
                });
        } catch (err) {
            console.log(err.message);
        }
    }

    const master = () => {
        return (
            <>
                <div className="master px-5 py-4">
                    <div className="">
                        <h3>Add location</h3>
                        <form className="form w-50">
                            <div className="row">
                                <input className="col form-control border-info" onChange={e => setLocation(e.target.value)} placeholder='Enter the location' required />
                                <button className="col-3 btn btn-info mx-2" onClick={e => addLocation(e)}>Add</button>
                            </div>
                        </form>
                    </div>
                </div >
            </>
        )
    }

    return (
        <>
            <Dashboard />
            {master()}
        </>
    )
}

export default AdminMaster;