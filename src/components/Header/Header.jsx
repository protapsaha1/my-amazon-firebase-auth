import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { userContext } from '../AuthProviders/AuthProviders';

const Header = () => {
    const { user } = useContext(userContext);
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
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/sign-up">Sign up</Link>
                {
                    user
                    &&
                    <div>
                        <img className='user-img' src={user.photoURL} alt="" />
                        <button className='sign-out'>Sign Out</button>
                    </div>
                }
            </div>


        </nav>
    );
};

export default Header;