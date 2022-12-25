import { Link } from 'react-router-dom';
import './admindashboard.css';

export function Dashboard() {
    return (
        <>
            <div className="row admindash ">
                <div className="col-2 bg-info text-center  menu">
                    <h3 className='my-4'>Admin Dashboard </h3>
                    <div className="text-center">
                        <Link to={'/master'} className='row text-decoration-none text-center text-white'>
                            <p className='n'>Master</p>
                        </Link>
                        <Link to={'/realestate/admin/sellermgmt'} className='row text-decoration-none text-center text-white'>
                            <p className='n'>Manage Seller</p>
                        </Link>
                        <Link to={'/managebuyer'} className='row text-decoration-none text-center text-white'>
                            <p className='n'>Manage Buyer</p>
                        </Link>
                        <Link to={'/propertyenquiry'} className='row text-decoration-none text-center text-white'>
                            <p className='n'>Property Enquiry</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

function AdminDashboard() {
    return (
        <>
            <Dashboard />
        </>
    )
}

export default AdminDashboard;