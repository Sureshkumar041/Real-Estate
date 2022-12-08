import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';    

function App() {
  return (
    <div className="App">
      <div className='row first d-flex flex-row-reverse py-3 px-4'>
        <Link to={'/signup'} className='d-flex flex-row-reverse text-decoration-none'>
          <button className='col-2 btn bg-white rounded-pill'>Login / Signup</button>
        </Link>
      </div>
    </div>
  )
};

export default App;