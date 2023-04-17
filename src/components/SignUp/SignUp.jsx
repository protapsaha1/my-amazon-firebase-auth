import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
    }

    return (
        <div className='signup-form-container'>
            <h2 className='form-title'>Sign up</h2>
            <form onSubmit={handleSignUp}>
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
                <div>
                    <input type="checkbox" name="checkbox" id="checkbox" className='pass-visible' />
                    <label htmlFor="">See password</label>
                </div>
                <div className="form-control">
                    <label htmlFor="">Confirm Password</label>
                    <br />
                    <input type="password" name="password" id="confirm-password" required />
                </div>
                <div>
                    <input type="checkbox" name="checkbox" id="checkbox-visible" className='pass-visible' />
                    <label htmlFor="">See password</label>
                </div>
                <button className='login-btn'>Sign up</button>
                <p className='create-regis'><small>Already have an Account? <Link to="/login" className='link'>Please Login</Link></small></p>
            </form>
            <p className='divider'>____________________ or ____________________</p>
            <button className='google-btn'>Continue with Google</button>
        </div>
    );
};

export default SignUp;