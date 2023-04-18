import React, { useContext } from 'react';
import { userContext } from '../components/AuthProviders/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import './PrivateRoute.css';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(userContext);
    const location = useLocation();


    if (loading) {
        return <div><p className='loading'>Loading ...</p></div>
    }

    if (user) {
        return children;
    }
    else {

        return <Navigate to="/login" state={{ from: location }} replace />

    }

};

export default PrivateRoute;