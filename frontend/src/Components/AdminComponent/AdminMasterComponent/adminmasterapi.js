import { useState } from "react";
import { Dashboard } from "../AdminDashboard/admindashboard";
import './adminmasterapi.css'
import PostProperty from "../../PostPropertyComponent/postproperty";

const AdminMaster = () => {

    const [location, setLocation] = useState();
    const [propertyFor, setPropertyFor] = useState();

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

    const addPropertyFor = (e) => {
        e.preventDefault();

        try {
            const addPropertyFor = {
                propertyFor: propertyFor
            };
            const url = 'http://localhost:3333/realestate/addPropertyFor';
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(addPropertyFor)
            };

            fetch(url, requestOptions)
                .then(async (res) => {
                    const fetchDataType = await res.json();
                    console.log("Response: ", fetchDataType);
                    if (fetchDataType.data.status >= 199 && fetchDataType.data.status < 300) {
                        alert(fetchDataType.data.message)
                    }
                    else {
                        alert(fetchDataType.data.message);
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
                        <div className="my-4">
                            <h3>Add property for</h3>
                            <form className="form w-50">
                                <div className="row">
                                    <input className="col form-control border-info"  name='propertyFor' onChange={e => setPropertyFor(e.target.value)} placeholder='Enter the location' required />
                                    <button className="col-3 btn btn-info mx-2" onClick={e => addPropertyFor(e)}>Add</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </>
        )
    }

    return (
        <>
            <Dashboard />
            {master()}
            <PostProperty location={location} />
        </>
    )
}

export const locationPass = (props) => {
    // console.log("Props: ",props.location);

}
locationPass();
export default AdminMaster;