import { Link } from 'react-router-dom';
import './seller.css'

function Seller() {

    return (
        <>
            <div className="row sellerdash">
                <div className="col-2 bg-info text-center">
                    <h3 className='my-4'>Seller Dashboard </h3>
                    <div className="text-center">
                        <Link to={'/realestate/postproperty'} className='row text-decoration-none text-center text-white'>
                            <p className='n'>Post Property</p>
                        </Link>
                        <Link to={'/realestate/manageproperty'} className='row text-decoration-none text-center text-white'>
                            <p className='n'>Manage Property</p>
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


export default Seller;