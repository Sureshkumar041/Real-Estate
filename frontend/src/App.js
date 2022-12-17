import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function App() {
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
          <div className='col-2'>
            <Link to={'/signup'} >
              <button className='btn bg-white rounded-pill'> Seller</button>
            </Link>
          </div>
          <div className='col start'>
            <div className='col d-flex flex-row-reverse py-3 px-4'>
              <Link to={'/signup'} className='d-flex flex-row-reverse text-decoration-none'>
                <button className='btn bg-white '>Login / Signup</button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
};

export default App;