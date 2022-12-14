import App from '../../App';
import React from 'react';
import { Link} from 'react-router-dom';
// import { Navigation} from 'react-router';
import {withRouter} from 'react-router';
import './login.css';
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

    nxtPage=()=>{
        console.log("Navigate route");
        // this.props.navigate('/admin');
        // this.context.router.push('');
        const {history} = this.props;
        history.push('/admin');
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
                    this.setState({ details: fetchdata.data.info })
                    // history.push('/admin');
                    // this.context.history.push('/admin'); 
                    this.nxtPage();
                } else {
                    this.setState({ details: fetchdata.data.info })
                }
            })
            .then(detailss => console.log(detailss))
            .catch(err => {
                console.log(err.message);
            })
    }


    render() {
        console.log("info:", this.state.details);
        // const {history} = this.props;

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

Login.contextType={
    router: React.PropTypes.object.isRequired
}

export default withRouter(Login);

export const LoginComponent = () => {
    // const navigate = useNavigate()
    return (
        <>
            <App/>
            <Login />
        </>
    )
}

// export default LoginComponent;