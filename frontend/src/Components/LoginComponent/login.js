import App from '../../App';
import { Link } from 'react-router-dom';
import './login.css'
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
                if (res.status >= 200 && res.status <= 299) {
                    // const details = res.json();
                    this.setState({details : res.json()})
                    // return res.json();      
                } else {
                    console.log("Status code: ", res.status);
                    alert('Invalid user name or password')
                    return res;
                }
            })
            .then(detailss => {
                console.log("DETAILS: ",this.state.details);
                // this.setState({details : detailss })
                console.log("Promise: ", detailss);
            })
            .catch(err => {
                console.log(err.message);
            })
        // const {details} = this.state;
        console.log("Details: ",this.state.info);
    }

    render() {
        return (
            <div className='login my-3 mx-4 w-25'>
                <form onSubmit={e => this.Signin(e)}>
                    <div className='form-floating my-2'>
                        <input className='form-control rounded-pill' onChange={e => this.HandleChange(e)} id='userName'
                            placeholder='example@gmail.com' required></input>
                        <label className='px-3'>Email address</label>   
                    </div>
                    <div className="form-floating my-2">
                        <input type="password" className="form-control rounded-pill" onChange={e => this.HandleChange(e)}
                            id="password" placeholder="password" required></input>
                        <label className='px-3'>Password</label>
                    </div>
                    <div className='row my-2 px-3'>
                        <button className='btn btn-primary rounded-4'>Login</button>
                    </div>
                    <Link to={'/signup'} className='row text-decoration-none px-3'>
                        <button className='btn btn-outline-primary rounded-4'>SignUp</button>
                    </Link>
                </form>
            </div >
        )
    }
};

const LoginComponent = () => {
    return (
        <>
            <App />
            <Login />
        </>
    )
}

export default LoginComponent;