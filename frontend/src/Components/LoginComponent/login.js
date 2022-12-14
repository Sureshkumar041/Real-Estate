import App from '../../App';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
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

        const connecter = () => {
            const navigate = useNavigate();
            navigate('/contacts');
        }

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
                console.log("fetch", fetchdata)
                const navigate = useNavigate();
                if (res.status >= 200 && res.status <= 299) {
                    // this.redirectToHome();
                    // return res.json();
                    this.setState({ details: fetchdata.data.info })
                    connecter();

                } else {
                    this.setState({ details: fetchdata.data.info })
                    // return res.json();
                }
            })
            .then(detailss => console.log(detailss))
            .catch(err => {
                console.log(err.message);
            })
    }


    render() {
        console.log("info:", this.state.details);

        // const { history } = this.props;
        return (
            <div className='login my-3 mx-4 w-25'>
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