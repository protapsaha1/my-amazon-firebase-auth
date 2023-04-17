import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { userContext } from '../AuthProviders/AuthProviders';
// import { FontAwesomeIcon , } from '@fortawesome/react-fontawesome';

const Login = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const { googlePop, userSignIn } = useContext(userContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)


        userSignIn(email, password)
            .then(result => {
                console.log(result.user)
                setError("")
                form.reset()
                setSuccess("Successfully login")
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleGoogle = () => {
        googlePop()
            .then(result => {
                const loggedIn = result.user
                console.log(loggedIn)
            })

            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage)
            })
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <br />
                    <input type="email" name="email" id="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <br />
                    <input type="password" name="password" id="password" required />
                </div>
                <p className='success'><small>{success}</small></p>
                <div>
                    <input type="checkbox" name="checkbox" id="checkbox" className='pass-visible' />
                    <label htmlFor="">See password</label>
                </div>
                <button className='login-btn'>Login</button>
                <p className='create-regis'><small>New to amazon? <Link to="/sign-up" className='link'>Create New Account</Link></small></p>
            </form>
            <p className='divider'>____________________________ or ____________________________</p>
            <button className='google-btn' onClick={handleGoogle}>Continue with Google</button>
        </div>
    );
};

export default Login;