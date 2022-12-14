import { Link } from 'react-router-dom';
import './dashboard.css';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ManageSeller from '../ManageSellerComponent/manageseller';

function Dashboard() {
    return (
        <>
            <div className="row leftnav">
                <div className="col-2 bg-info text-center">
                    <h3 className='my-4'>Admin</h3>
                    <div className="text-center">
                        <Link to={'/'} className='row text-decoration-none text-center text-white my-1'>
                            <p>Master</p>
                        </Link>
                        <Link to={'/manageseller'} className='row text-decoration-none text-center text-white my-1'>
                            <p>Manage Seller</p>
                        </Link>
                        <Link to={'/'} className='row text-decoration-none text-center text-white my-1'>
                            <p>Manage Buyer</p>
                        </Link>
                        <Link to={'/'} className='row text-decoration-none text-center text-white my-1'>
                            <p>Property Enquiry</p>
                        </Link>
                    </div>
                </div>
                <div className='col bg-secondary'>
                    <p>City, Property Type</p>
                </div>
            </div>
            
        </>
    )
}

export default Dashboard;