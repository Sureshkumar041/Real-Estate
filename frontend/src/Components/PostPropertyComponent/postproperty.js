import './postproperty.css'
import Seller from '../SellerComponent/seller';


function Postproperty() {

    const uploadPropery = () => {
        return true;
    }

    return (
        <>
            <Seller />
            <div className='postproperty'>
                <form className='form  mx-5 my-2' onSubmit={uploadPropery}>
                    <div className='text-center'>
                        <h2>Post Property</h2>
                    </div>
                    <div className='row mx-2'>
                        <label>Address</label>
                        <input className='form-control'></input>
                    </div>
                    <div className='row mx-2'>
                        <label>City</label>
                        <input className='form-control'></input>
                    </div>
                    <div className='row px-2'>
                        <div className='col'>
                            <label>State</label>
                            <input className='form-control'></input>
                        </div>
                        <div className='col'>
                            <label>Pin code</label>
                            <input className='form-control'></input>
                        </div>
                    </div>
                    <div className='row mx-2'>
                        <label>Upload property photo</label>
                        <input className='form-control' type='file'></input>
                    </div>
                    <div className='row mx-2 my-3'>
                        <select class="form-select">
                            <option selected>Choose property for</option>
                            <option value="Rent">Rent</option>
                            <option value="Sell">Sell</option>
                        </select>
                    </div>
                    <div className='row px-2'>
                        <div className='col'>
                            <label>Area (sq.ft)</label>
                            <input className='form-control'></input>
                        </div>
                        <div className='col'>
                            <label>Rate(per sq.ft)</label>
                            <input className='form-control'></input>
                        </div>
                    </div>
                    <div className='mx-2'>
                        <label>Description</label>
                        <textarea className='form-control' type='message'></textarea>
                    </div>
                    <div className='row my-3 mx-2'>
                        <button className='col btn bg-secondary text-light  mx-4'>Cancel</button>
                        <button className='col btn bg-info mx-4'> Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Postproperty;