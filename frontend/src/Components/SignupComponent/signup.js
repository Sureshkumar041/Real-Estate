import { Component } from 'react';
import { Link } from 'react-router-dom';
import './signup.css'
import { withRouter } from '../NavigateComponent/router';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            role: '',
            email: '',
            userName: '',
            phoneNumber: '',
            password: '',
            data: []
        }
    }

    goToLogin = () => {
        this.props.navigate('/realestate/login');
    }

    HandleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    Submit = async (e) => {
        e.preventDefault();
        console.log("Submit");
        const { role, email, userName, phoneNumber, password } = this.state;

        const data = {
            role,
            email,
            userName,
            phoneNumber,
            password
        };
        console.log("Register value : ", data);

        const url = 'http://localhost:3333/realestate/signup';
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        await fetch(url, requestOptions)
            .then(async res => {
                if (res.status >= 200 && res.status <= 299) {
                    console.log("Response: ", res.json({ "message": res.message }));
                    alert('Register successfully...!');
                    this.goToLogin();
                    console.log("Status code: ", res.status);
                    return res;
                } else {
                    // throw new Error(await res.json({'Message' : res.message}));
                    console.log("Status code: ", res.status);
                    alert('User name or email address already exists')
                    return res;
                }
            })
            .then(data => {

                console.log("Promise: ", data);
            })
            .catch(err => {
                console.log(err.message);
            })

    }

    render() {
        return (
            <>
                <div className='register my-5'>
                    <div className='text-center'>
                        <h3 className='font-monospace fw-bold'>Signup</h3>
                    </div>
                    <div className='forms position-absolute'>
                        <form className='mx-4 my-2'  onSubmit={e => this.Submit(e)}>
                            <div className='mx-5' id='radio'>
                                <input className='mx-3' type='radio' onChange={e => this.HandleChange(e)}
                                    name='role' value='Buyer' required ></input>
                                <label>Buyer</label>
                                <span className='mx-5'>
                                    <input className='mx-3' type='radio' onChange={e => this.HandleChange(e)}
                                        name='role' value='Seller' required ></input>
                                    <label>Seller</label>
                                </span>
                            </div>
                            <div className='my-2'>
                                <label>Email address</label>
                                <input className='form-control border-0 bg-secondary bg-opacity-25' type='email' onChange={e => this.HandleChange(e)}
                                    name='email' placeholder='example@gmail.com' required ></input>
                            </div>
                            <div className='my-2'>
                                <label>User name</label>
                                <input className='form-control border-0 bg-secondary bg-opacity-25' onChange={e => this.HandleChange(e)}
                                    name='userName' placeholder='username' required ></input>
                            </div>
                            <div className=' my-2'>
                                <label>Phone number</label>
                                <input className='form-control border-0 bg-secondary bg-opacity-25' onChange={e => this.HandleChange(e)}
                                    pattern='(?<!\d)\d{10}(?!\d)' title='Invalid phone number' name='phoneNumber'
                                    placeholder='phonenumber' required  ></input>
                            </div>
                            <div className="my-2">
                                <label>Password</label>
                                <input type="password" className="form-control border-0 bg-secondary bg-opacity-25" onChange={e => this.HandleChange(e)}
                                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                                    title='Password must be strong' name='password' placeholder="password" required  ></input>
                            </div>
                            <div className='row my-2 px-3'>
                                <button className='btn bg-info bg-opacity-75 my-2' type='Submit'>Submit</button>
                                {/* <button className='btn btn-outline-primary rounded-4'>Login</button> */}
                            </div>
                            <Link to={'/realestate/login'} className='row text-decoration-none px-3'>
                                <button className='btn btn-outline-info'>Login</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </>
        );
    }

}

export default withRouter(SignUp);