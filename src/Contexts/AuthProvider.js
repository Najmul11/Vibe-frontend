import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateEmail, updateProfile} from 'firebase/auth'
import { app } from '../firebase/firebase.init';


export const AuthContext=createContext()
const auth=getAuth(app)
const googleProvider=new GoogleAuthProvider()

const AuthProvider = (props) => {
    const [user, setUser]=useState(null)
    const [loading, setLoading]=useState(true)
    // create user
    const createUser=(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // email/pass signin
    const signIn=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google popup sign
    const signInWithGoogle=()=>{
        setLoading(true)
       return signInWithPopup(auth, googleProvider)
    }
      // auth state observer
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>unsubscribe()
    },[])
     // update profile
     const updateUserProfile=(profile)=>{
        return updateProfile(auth.currentUser, profile)
    }
     // update profile
     const updateUserEmail=(email)=>{
        return updateEmail(auth.currentUser, email)
    }
     //  signout
     const logout=()=>{
        setLoading(true)
        return signOut(auth)
    }

    const authInfo={user, signInWithGoogle,loading, logout, createUser, signIn, updateUserProfile, updateUserEmail}
    return (
        <AuthContext.Provider value={authInfo}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;