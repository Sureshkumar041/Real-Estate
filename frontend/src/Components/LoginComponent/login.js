import React from 'react';
import './login.css';
import App from '../../App';
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
            details: [],
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
                this.props.navigate('/seller');
            } else if (fetchdata.data.info.role === 'Buyer') {
                this.props.navigate('/buyer');
            } else {
                this.props.navigate('/admin');
            }
        }
        return true;
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
                console.log("fetch", fetchdata);
                if (res.status >= 200 && res.status <= 299) {
                    localStorage.setItem('userdetails', JSON.stringify(fetchdata.data.info));
                    this.setState({ details: fetchdata.data.info })
                    this.nxtPage(fetchdata);
                } else {
                    this.setState({ details: fetchdata.data.info });
                }
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    render() {
        return (
            <>
                <App />
                <div className='login my-5 mx-4 w-25'>
                    <form onSubmit={e => this.Signin(e)} className=''>
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
                        <Link to={'/signup'} className='row text-decoration-none px-3'>
                            <button className='btn btn-outline-info'>SignUp</button>
                        </Link>
                    </form>
                </div >
            </>
        )
    }
};

export default withRouter(Login);