import { auth, googleProvider, facebookProvider } from "@/firebase/config";
import signup from "@/pages/signup";
import Router from "next/router";
import { signInWithPopup, signOut } from "firebase/auth"; //popUp Google SignIn window
import Navbar from "@/components/Navbar";
import { useState } from "react";
//SignIn with Google account
export let isLoggedIn = 0; //check if loggedin to Firebase so remove Login btn and show Logout btn
export const signInWithGoogleAccount = async () => {
    //Login with Google account

    try {
        await signInWithPopup(auth, googleProvider);
        window.alert("welcome " + auth.currentUser.email); //show wich email did singIn
        Router.push("/"); // Navigate to homepage.
        isLoggedIn = true;
        console.log(auth?.currentUser?.email);
        localStorage.setItem("image", auth.currentUser.photoURL);
    } catch (error) {
        isLoggedIn = 0;
        Router.push("/404"); // Navigate to 404.
        isLoggedIn = false;
        console.log(error);
    }
    return true;
};
//SignIn with FaceBook account
export const signInWithFbAccount = async () => {
    //login with FaceBook
    try {
        await signInWithPopup(auth, facebookProvider);
        window.alert("welcome " + auth.currentUser.email); //show wich email did singIn
        Router.push("/"); // Navigate to homepage.
        isLoggedIn = true;
        console.log(auth?.currentUser?.email);
        localStorage.setItem("image", auth.currentUser.photoURL);
    } catch (error) {
        isLoggedIn = 0;
        Router.push("/404"); // Navigate to 404.
        isLoggedIn = false;
        console.log(error);
    }
};

//LogOut Method for any account Form Firebase Provider
export const Logout = async () => {
    try {
        await auth.signOut(); // Sign-out successful
        isLoggedIn = 0;
        console.log(auth?.currentUser?.email);
        Router.push("/"); // Navigate to homepage
    } catch (error) {
        isLoggedIn = 1;
        Router.push("/404"); // Navigate to homepage.
        console.log(error);
    }
};
