
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'

import app from './firebase';
import { createContext, useEffect, useState } from 'react';

const auth = getAuth(app)

export const contexM = createContext(null)


const ContexProvider = ({ children }) => {

    const [user, SetUser] = useState(null)


    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(email, password)


    }
    const SingIn = (email, password) => {
        return signInWithEmailAndPassword(email, password)
    }


    const logout = () => {

        return signOut(auth)

    }



    useEffect(() => {

        const off = onAuthStateChanged(auth, wtach => {
            SetUser(wtach)
        })

        return (() => {
            SetUser(off)
        })



    }, [])



    const userInfos = {
        user,
        createUser,
        SingIn,
        logout


    }

    return <contexM.Provider value={userInfos}>
        {children}
    </contexM.Provider>

};

export default ContexProvider;