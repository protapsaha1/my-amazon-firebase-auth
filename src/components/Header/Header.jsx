import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { userContext } from '../AuthProviders/AuthProviders';

const Header = () => {
    const { user, logOut } = useContext(userContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error.message);
            })
    };

    return (
        <nav className='header'>
            <div className='website-header'>
                <Link to="/"><img src={logo} alt="" /></Link>
                {
                    user
                    &&
                    <span className='user-info'>Welcome {user.email}</span>
                }
            </div>
            <div className='path-user'>
                <div>
                    <Link to="/">Shop</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/sign-up">Sign up</Link>
                </div>
                <div>
                    {
                        user
                        &&
                        <>
                            <button className='sign-out' onClick={handleLogOut}>Sign Out</button>
                            <img className='user-img' src={user.photoURL} alt="" />
                        </>
                    }
                </div>
            </div>
        </nav>


    );
};

export default Header;