import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";



export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user , setUser] = useState()
    const [loading , setLoading] = useState(true)


    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth , googleProvider)
    }
    const createUser = (email , password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email , password)
    }
    const signIn = (email , password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth , email , password)
    }
    const userProfile = (name , image) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
          })
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser =>{
            setLoading(false)
            setUser(currentUser)
        })
        return () =>{
            unsubscribe();
        }
    },[])




    const authInfo = {loading , user, googleSignIn , createUser ,userProfile , signIn , logOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;