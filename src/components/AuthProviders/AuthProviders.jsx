import React, { createContext, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export const userContext = createContext(null);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googlePop = () => {
        signInWithPopup(auth, googleProvider);
    }

    const userInformation = {
        user,
        googlePop,
        createUser,
        userSignIn,
    }
    return (
        <userContext.Provider value={userInformation}>
            {children}
        </userContext.Provider>
    );
};


export default AuthProviders;