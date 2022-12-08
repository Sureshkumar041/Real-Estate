import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../../App';
import { Link } from 'react-router-dom';
import './login.css'

const Login = () => {

    const Signin = (e) => {
        e.preventDefault();
        console.log("Login here...!");
    }

    return (
        <div className='login my-3 mx-4 w-25'>
            <form onSubmit={e => Signin(e)}>
                <div className='form-floating my-2'>
                    <input className='form-control rounded-pill' placeholder='example@gmail.com'></input>
                    <label className='px-3'>Email address</label>
                </div>
                <div className="form-floating my-2">
                    <input type="password" className="form-control rounded-pill" id="floatingInput" placeholder="password"></input>
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