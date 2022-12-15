import { Link } from 'react-router-dom';
import Postproperty from '../PostPropertyComponent/postproperty';
import './seller.css'

function Seller() {

    const show = () => {
        console.log("Postperty");
        return (
            <>
                <Postproperty />
            </>
        )
    }
    return (
        <>
            <div className="row sellerdash">
                <div className="col-2 bg-info text-center">
                    <h3 className='my-4'>Seller Dashboard </h3>
                    <div className="text-center">
                        <Link to={'/postproperty'} className='row text-decoration-none text-center text-white' onClick={show}>
                            <p className='n'>Post Property</p>
                        </Link>
                        <Link to={'/manageproperty'} className='row text-decoration-none text-center text-white'>
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
                {/* <div className='col bg-secondary text-center content'>
                    <p className='h3 fw-bold font-monospace py-3'>Your Property</p>
                </div> */}
            </div>
        </>
    )
}


export default Seller;