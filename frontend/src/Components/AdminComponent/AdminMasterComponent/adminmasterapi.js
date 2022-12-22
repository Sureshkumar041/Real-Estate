import { useEffect, useState } from "react";
import { Dashboard } from "../AdminDashboard/admindashboard";
import './adminmasterapi.css'

const AdminMaster = () => {

    const [location, setLocation] = useState(''),
        [showlocation, setShowlocation] = useState([]),
        [locationVisibility, setLocationVisibility] = useState(false),
        [propertyFor, setPropertyFor] = useState('');
    const API = 'http://localhost:3333/realestate';


    const addLocation = async (e) => {
        e.preventDefault();
        console.log("ADD LOCATION START...!");
        console.log("LOcation: ", location);

        try {
            const addLocation = {
                location
            };
            const url = 'http://localhost:3333/realestate/addLocation';
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

    const createPro = (formData, path) => {
        console.log("Data : ", formData, "Path: ", path);
        return fetch(`${API}/${path}`, {
            method: "post",
            headers: {
                Accept: "application/json",
            },
            body: formData,
        })
            .then((response) => {
                return response.json();
            })
            .catch((err) => console.log(err));
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('propertyFor', propertyFor);
        console.log("Property for: ", propertyFor);
        await createPro(formData, 'propertyFor').then((res) => {
            console.log('res', res);
        })
    }


    // const addPropertyFor = (e) => {
    //     e.preventDefault();

    //     try {
    //         const addPropertyFor = {
    //             propertyFor: propertyFor
    //         };
    //         const url = 'http://localhost:3333/realestate/addPropertyFor';
    //         const requestOptions = {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(addPropertyFor)
    //         };

    //         fetch(url, requestOptions)
    //             .then(async (res) => {
    //                 const fetchDataType = await res.json();
    //                 console.log("Response: ", fetchDataType);
    //                 if (fetchDataType.data.status >= 199 && fetchDataType.data.status < 300) {
    //                     alert(fetchDataType.data.message)
    //                 }
    //                 else {
    //                     alert(fetchDataType.data.message);
    //                 }
    //             });
    //     } catch (err) {
    //         console.log(err.message);
    //     }
    // }
    
    //
    
    const showPlace = () => {
        console.log("City master...!");
        // const url = '${API}/showlocation';

        fetch('http://localhost/realestate/showlocation')
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

    // Location Table
    const showTable = () => {
        console.log("Show table");
        return (
            <>
                <div className="row my-5 mx-5 tableDiv">
                    <div className="col locations border-bottom border-dark">
                        <table className="table table-hover table-bordered border-dark bg-opacity-75 text-center">
                            <thead>
                                <tr>
                                    <th>SI.No</th>
                                    <th>location</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {showlocation.map((item) => (
                                    <tr>
                                        <td>{item.no} </td>
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
            </>
        )
    }

    // Master
    const master = () => {
        return (
            <>
                <div className="master px-5 py-4">
                    <div className="">
                        <h3>Add location</h3>
                        <div className="row addLocation">
                            <div className="col-10">
                                <form className="form" onSubmit={e => addLocation(e)}>
                                    <div className="row">
                                        <div className="col-7">
                                            <input className="form-control border-info" onChange={e => setLocation(e.target.value)} placeholder='Enter the location' required />
                                        </div>
                                        <button className="col-2 btn btn-info mx-2" type="submit">Add</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-3 tables">
                                <button className="btn btn-outline-info px-4 id" onClick={e => setLocationVisibility(!locationVisibility)}>
                                    {locationVisibility === true ? 'Hide' : 'Show location table'}
                                </button>
                            </div>
                        </div>
                        {locationVisibility && showTable()}
                        <div className="row ">
                            <h3>Add property for</h3>
                            <div className="col-10">
                                <form className="form" onSubmit={e => onSubmit(e)}>
                                    <div className="row">
                                        <div className="col-7">
                                            <input className="form-control border-info" onChange={e => setPropertyFor(e.target.value)} placeholder='Enter the location' required />
                                        </div>
                                        <button className="col-2 btn btn-info mx-2" type="submit">Add</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-3 tables">
                                <button className="btn btn-outline-info" onClick={showTable}>Show Property for</button>
                            </div>
                        </div>
                    </div>
                </div >
            </>
        )
    }

    // Master API for location
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

    useEffect((e) => {
        cityMaster();
        showPlace();
    }, []);

    return (
        <>
            <Dashboard />
            {master()}
        </>
    )
}

export default AdminMaster;