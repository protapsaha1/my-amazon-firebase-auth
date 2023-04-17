import React, { useContext, useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { userContext } from '../AuthProviders/AuthProviders';

const SignUp = () => {
    // const [confirmError , setConfirmError] = useState("");
    const [error, setError] = useState("");

    const { googlePop } = useContext(userContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPass = form.confirm.value;
        console.log(email, password, confirmPass)

        if (password !== confirmPass) {
            setError("please confirm password")
            return;
        }

        else if (password.length < 6) {
            setError("Add some character")
            return;
        }

        else if (!/(?=.*[A-Z])/.test(password)) {
            setError("Please add at least one uppercase")
            return;
        }

        else if (!/(?=.*[0-9])/.test(password)) {
            setError("Please add at least one number")
            return;
        }

        else if (!/(?=.*[@#$._])/.test(password)) {
            setError("please add at least one spacial character")
            return;
        }
    }



    const handleGoogle = () => {
        googlePop()
            .then(() => {

            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className='signup-form-container'>
            <h2 className='form-title'>Sign up</h2>
            <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <br />
                    <input type="email" name="email" id="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <br />
                    <input type="password" name="password" id="password" required />
                    <p className='error'><small>{error}</small></p>
                </div>
                <div>
                    <input type="checkbox" name="checkbox" id="checkbox" className='pass-visible' />
                    <label htmlFor="checkbox">See password</label>
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <br />
                    <input type="password" name="confirm" id="confirm" required />
                    <p className='error'><small>{error}</small></p>
                </div>
                <div>
                    <input type="checkbox" name="checkbox" id="checkbox-visible" className='pass-visible' />
                    <label htmlFor="checkbox">See password</label>
                </div>
                <button className='login-btn'>Sign up</button>
                <p className='create-regis'><small>Already have an Account? <Link to="/login" className='link'>Please Login</Link></small></p>
            </form>
            <p className='divider'>____________________ or ____________________</p>
            <button className='google-btn' onClick={handleGoogle}>Continue with Google</button>
        </div>
    );
};

export default SignUp;