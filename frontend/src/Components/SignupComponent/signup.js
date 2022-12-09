import 'bootstrap/dist/css/bootstrap.min.css';
// import Login from '../LoginComponent/login';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import App from '../../App';
import './signup.css'

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

    HandleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    Submit = (e) => {
        e.preventDefault();
        console.log("Submit");
        const { role, email, userName, phoneNumber, password } = this.state;
        // if (role === '' && email === '' && userName === '' && phoneNumber === '' && password === '') {
        //     alert("")
        // }
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

        fetch(url, requestOptions)
            .then(res => {
                if (res.ok) console.log('Register Successfully');
                return res;
            })
            .then(data => {
                console.log("Response: ", data);
                alert('Register Successfully ...!')
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    render() {
        return (
            <div className='register my-5'>
                <form className='position-absolute end-0 mx-4' onSubmit={e => this.Submit(e)}>
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
                    <div className='form-floating my-2'>
                        <input className='form-control rounded-pill' type='email' onChange={e => this.HandleChange(e)}
                            name='email' placeholder='example@gmail.com' required ></input>
                        <label className='px-3'>Email address</label>
                    </div>
                    <div className='form-floating my-2'>
                        <input className='form-control rounded-pill' onChange={e => this.HandleChange(e)}
                            name='userName' placeholder='username' required ></input>
                        <label className='px-3'>User name</label>
                    </div>
                    <div className='form-floating my-2'>
                        <input className='form-control rounded-pill' onChange={e => this.HandleChange(e)}
                            pattern='(?<!\d)\d{10}(?!\d)' title='Invalid phone number' name='phoneNumber'
                            placeholder='phonenumber' required  ></input>
                        <label className='px-3'>Phone number</label>
                    </div>
                    <div className="form-floating my-2">
                        <input type="password" className="form-control rounded-pill" onChange={e => this.HandleChange(e)}
                            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                            title='Password must be strong' name='password' placeholder="password" required  ></input>
                        <label className='px-3'>Password</label>
                    </div>
                    <div className='row my-2 px-3'>
                        <button className='btn btn-primary rounded-4 my-2' type='Submit'>Submit</button>
                        {/* <button className='btn btn-outline-primary rounded-4'>Login</button> */}
                    </div>
                    <Link to={'/login'} className='row text-decoration-none px-3'>
                        <button className='btn btn-outline-primary rounded-4'>Login</button>
                    </Link>
                </form>
            </div>
        );
    }

}
const SignupComponent = () => {
    return (
        <div>
            <App />
            <SignUp />
        </div>
    );
}

export default SignupComponent;