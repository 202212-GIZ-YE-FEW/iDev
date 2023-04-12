import React, { createContext, useContext, useEffect, useState } from "react";
import {
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification,
    signOut,
    signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "@/firebase/config";
import Router from "next/router";
import image from "~/blog.png";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState({ email: null, uid: null });
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    email: user.email,
                    uid: user.uid,
                });
                setAuthenticated(true); // set authenticated state to true
                localStorage.setItem("image", user.photoURL || image); // save user photoURL to localStorage
            } else {
                setUser({ email: null, uid: null });
                setAuthenticated(false);
                localStorage.removeItem("image"); // remove user photoURL from localStorage
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logIn = (email, password) => {
        localStorage.setItem("image", image);
        return signInWithEmailAndPassword(auth, email, password).then(() => {
            setAuthenticated(true);
        });
    };

    const sendEmailConfirmation = () => {
        const user = auth.currentUser;
        return sendEmailVerification(user)
            .then(() => console.log("Verification email sent."))
            .catch((error) => console.error(error));
    };

    //SignIn with Google account
    const signInWithGoogleAccount = async () => {
        //Login with Google account

        try {
            await signInWithPopup(auth, googleProvider);
            setAuthenticated(true);
            window.alert("welcome " + auth.currentUser.email); //show wich email did singIn
            Router.push("/"); // Navigate to homepage.

            localStorage.setItem("image", auth.currentUser.photoURL);
        } catch (error) {
            setAuthenticated(false);
            Router.push("/404"); // Navigate to 404.
            setAuthenticated(false);
        }
        return true;
    };
    //SignIn with FaceBook account
    const signInWithFbAccount = async () => {
        //login with FaceBook
        try {
            await signInWithPopup(auth, facebookProvider);
            window.alert("welcome " + auth.currentUser.email); //show wich email did singIn
            Router.push("/"); // Navigate to homepage.
            setAuthenticated(true);

            localStorage.setItem("image", auth.currentUser.photoURL);
        } catch (error) {
            setAuthenticated(false);
            Router.push("/404"); // Navigate to 404.
            setAuthenticated(false);
        }
    };
    const Logout = async () => {
        try {
            setUser({ email: null, uid: null });
            setAuthenticated(false);
            await auth.signOut(); // Sign-out successful
            setAuthenticated(false);
            localStorage.clear();
            Router.push("/"); // Navigate to homepage
        } catch (error) {
            setAuthenticated(true);
            Router.push("/404"); // Navigate to homepage.
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                authenticated,
                signUp,
                logIn,
                Logout,
                sendEmailConfirmation,
                signInWithGoogleAccount,
                signInWithFbAccount,
            }}
        >
            {loading ? <div>Loading...</div> : children}
        </AuthContext.Provider>
    );
}
