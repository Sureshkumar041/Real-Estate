import { useEffect, useState } from "react";
import Seller from "../seller";
import './manageseller.css'
import notFound from '../../../Image/icons8-error-cloud.gif'
// import { FaEdit, FaDelete } from 'react-icons/fa'

function MyProperty() {
    const API = 'http://localhost:3333/realestate';
    // const navigate = useNavigate();
    const [getPoperty, setGetProperty] = useState([]),
        [propertyAvailable, setPropertyAvailable] = useState(false);

    const getOwnProperty = async () => {
        const sellerData = JSON.parse(localStorage.getItem('userdetails'));
        const id = sellerData.id;
        const token = JSON.parse(localStorage.getItem('token'));
        console.log("Seller id get: ", id);
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
                    // alert(fetchData.data)
                    if (window.confirm('Login again')) {
                        console.log("Okay");
                    } else {
                        console.log("Else");
                    }

                }
            })
            .catch(err => {
                console.log('Get own property : ', err.message);
            })
    }

    const handleChange = (e) => {
        console.log("Handle change");
        console.log("Row data: ", e);
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
                                                <button className="btn bg-info px-2" onClick={() => handleChange(item._id)}>Edit</button>
                                                <button className="btn bg-danger mx-3" onClick={() => handleChange(item._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div >
            </>
        )
    }

    useEffect(() => {
        getOwnProperty()
    }, [])

    return (
        <>
            <Seller />
            {propertyAvailable ? noProperty() : SellerDetails()}
        </>
    )
}

export default MyProperty;