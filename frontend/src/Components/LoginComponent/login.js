import React from 'react';
import './login.css';

import { Link } from 'react-router-dom';
import { withRouter } from '../NavigateComponent/router';
import { Component } from 'react';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            data: {},
            details: []
        };
    }

    HandleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    nxtPage = (fetchdata) => {
        console.log("Role: ", fetchdata.data.info.role);
        if (fetchdata.data.info.id !== '') {
            if (fetchdata.data.info.role === 'Seller') {
                this.props.navigate('/realestate/seller');
            } else if (fetchdata.data.info.role === 'Buyer') {
                this.props.navigate('/realestate');
            } else if (fetchdata.data.info.role === 'Admin') {
                this.props.navigate('/realestate/admin');
            }
        }
    }

    Signin = async (e) => {
        e.preventDefault();
        console.log("Login here...!");

        const { userName, password } = this.state;
        const data = {
            userName,
            password
        };

        const url = 'http://localhost:3333/realestate/login';
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        await fetch(url, requestOptions)
            .then(async res => {
                const fetchdata = await res.json();
                console.log("Token: ", fetchdata);
                if (fetchdata.data.status >= 200 && fetchdata.data.status <= 299) {
                    localStorage.setItem('token', JSON.stringify(fetchdata.data.token));
                    localStorage.setItem('userdetails', JSON.stringify(fetchdata.data.info));
                    this.setState({ details: fetchdata.data.info })
                    this.nxtPage(fetchdata);
                } else {
                    this.setState({ details: fetchdata.data.info });
                    alert(fetchdata.data.info)
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    authentication = () => {
        return (
            <React.Fragment>
                <div className='login'>
                    <form onSubmit={e => this.Signin(e)} className='forms'>
                        <div className='text-center'>
                            <h3>Login</h3>
                        </div>
                        <div className='my-2'>
                            <label className='form-comtrol'>Email address</label>
                            <input className='form-control border-0 bg-secondary bg-opacity-25' onChange={e => this.HandleChange(e)} id='userName'
                                placeholder='example@gmail.com' required></input>
                        </div>
                        <div className="my-2">
                            <label className='form-comtrol'>Password</label>
                            <input type="password" className="form-control border-0 bg-secondary bg-opacity-25" onChange={e => this.HandleChange(e)}
                                id="password" placeholder="Enter the password" required></input>
                        </div>
                        <div className='row my-2 px-3'>
                            <button className='btn bg-info bg-opactity-75 '>Login</button>
                        </div>
                        <Link to={'/realestate/signup'} className='row text-decoration-none px-3'>
                            <button className='btn btn-outline-info'>SignUp</button>
                        </Link>
                    </form>
                </div >
            </React.Fragment>
        )
    }

    render() {
        return (
            <>
                {this.authentication()}
            </>
        )
    }
};

export default withRouter(Login);