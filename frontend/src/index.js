import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginComponent from './Components/LoginComponent/login';
import SignupComponent from './Components/SignupComponent/signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/signup' element={<SignupComponent />}></Route>
      <Route path='/login' element={<LoginComponent/>}></Route>
      <Route path='*' element={'Ramuk innum avlo page ready pannule'}/>
    </Routes>
  </BrowserRouter>
);


// ReactDOM.render(<App></App>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
