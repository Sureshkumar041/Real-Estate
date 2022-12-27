import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import './buyer.css'
import PropertyCart from '../UserComponent/PropertyComponent/PropertyComponent/propertyCartApi'

function BuyerComponent() {
  const [showlocation, setShowlocation] = useState([]),
    [token, setToken] = useState(false),
    [form, setForm] = useState(false),
    [showProperty, setShowProperty] = useState([]);
    // [showPropertyType, setShowPropertyType] = useState([]);
  const API = 'http://localhost:3333/realestate'

  const handleChange = e => {
    console.log('Handle change')
    console.log('NAME & VALUES: ', e.target.value)
  }

  const profile = () => {
    return (
      <>
        <div>
          <header>
            <div className='row header bg-info bg-opacity-75'>
              <div className='col-2 my-4 my-2 text-dark'>
                <p className='mx-3 fs-4 my-2 fw-bold font-monospace'>
                  Real Estate
                </p>
              </div>
              <div className='col-2 location my-2'>
                <select
                  className='form-select rounded-pill'
                  onChange={e => handleChange(e)}
                >
                  <option>Choose the location</option>
                  {
                    showlocation.map(item => (
                      <option
                        value={item.location}
                        key={item._id}
                        onClick={e => handleChange(e)}
                        name='locations'
                      >
                        {item.location}
                      </option>
                    ))}
                </select>
              </div>
              <div className='col-2 location my-2'>
                <select
                  className='form-select rounded-pill'
                  onChange={e => handleChange(e)}
                >
                  <option onChange={e => handleChange(e)}>Property type</option>
                  {showProperty.map((item, index) => (
                    <option key={index} >{item.propertyFor} </option>
                  ))}
                </select>
              </div>
              {token ? authenticated() : entryProfile()}
            </div>
          </header>
        </div>
      </>
    )
  }

  // Guest Login
  const entryProfile = () => {
    return (
      <React.Fragment>
        <div className='col d-flex flex-row-reverse py-3 px-4'>
          <Link
            to={'/realestate/signup'}
            className='d-flex flex-row-reverse text-decoration-none'
          >
            <button className='btn bg-white' onClick={e => setForm(!form)}>
              Login / Signup
            </button>
          </Link>
        </div>
      </React.Fragment>
    )
  }

  // Authenication
  const authenticated = () => {
    return (
      <React.Fragment>
        <div className='col start'>
          <div className='col d-flex flex-row-reverse py-3 px-4'>
            <FaUser className='cursor-pointer fs-1' id='usericon' />
            <p className='my-2 mx-2 fs-5'>You </p>
          </div>
        </div>
      </React.Fragment>
    )
  }

  // Get location data
  const cityMaster = () => {
    const url = `${API}/showlocation`

    fetch(url)
      .then(async res => {
        const fetchData = await res.json()
        return fetchData
      })
      .then(fetchData => {
        setShowlocation(fetchData.data.location)
        console.log('fetchData.data.location: ', fetchData.data.location)
      })
      .catch(err => {
        console.log('Show location: ', err.message)
      })
  }

  // Buyer...!
  const tokenValidate = () => {
    if (JSON.parse(localStorage.getItem('token'))) {
      setToken(true)
    }
  }

  // Get property
  const getProperty = () => {
    console.log('City master...!')
    fetch(`${API}/showpropertyfor`)
      .then(async res => {
        const fetchData = await res.json()
        return fetchData
      })
      .then(fetchData => {
        setShowProperty(fetchData.data.data)
        console.log('Show property for : ', fetchData.data.data)
      })
      .catch(err => {
        console.log('Show location: ', err.message)
      })
  }

  const getPropertyType = async (path) => {
    await fetch(`${API}/${path}`)
      .then(async res => {
        const fetchData = await res.json();
        return fetchData;
      })
      .then(fetchData => {
        console.log('Get property type: ', fetchData)
        // setShowPropertyType(fetchData.data.data);
      })
      .catch(err => {
        console.log("Get property type: ", err);
      })
  }

  useEffect(e => {
    cityMaster()
    tokenValidate()
    getProperty()
    getPropertyType('showpropertytype')
  }, [])

  return (
    <>
      {profile()}
      <PropertyCart />
    </>
  )
}

export default BuyerComponent
