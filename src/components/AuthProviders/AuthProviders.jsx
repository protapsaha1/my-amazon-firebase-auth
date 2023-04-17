import React, { createContext } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export const userContext = createContext(null);

const AuthProviders = ({ children }) => {

    const googlePop = () => {
        signInWithPopup(auth, googleProvider);
    }

    const userInformation = {
        googlePop,
    }
    return (
        <userContext.Provider value={userInformation}>
            {children}
        </userContext.Provider>
    );
};


export default AuthProviders;