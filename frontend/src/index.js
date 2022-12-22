import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/LoginComponent/login';
import SignUp from './Components/SignupComponent/signup';
import Homepage from './Components/HomepageComponent/homepage'
import AdminDashboard from './Components/AdminComponent/AdminDashboard/admindashboard';
import AdminMaster from './Components/AdminComponent/AdminMasterComponent/adminmasterapi'
import Seller from './Components/SellerComponent/seller';
import PostProperty from './Components/PostPropertyComponent/postproperty';
import BuyerComponent from './Components/BuyerComponent/buyer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/realestate/signup' element={<SignUp />} />
      <Route path='/realestate/login' element={<Login />} />
      <Route path='/home' element={<Homepage />} />
      <Route path='/realestate/admin' element={<AdminDashboard />} />
      <Route path='/master' element={<AdminMaster />} />
      <Route path='/realestate/seller' element={<Seller />} />
      <Route path='/realestate/postproperty' element={<PostProperty />} />
      <Route path='/realestate' element={<BuyerComponent />} />
      {/* <Route path='*' element={<p className='text-center my-5'>Page Not Found : 404 Error</p>} /> */}
    </Routes>
  </BrowserRouter>
);


// ReactDOM.render(<App></App>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
