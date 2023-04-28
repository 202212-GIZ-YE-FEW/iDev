import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification,
    signInWithPopup,
    signInWithEmailAndPassword,
    reauthenticateWithCredential,
    EmailAuthProvider,
    updatePassword,
} from "firebase/auth";
import Image from "next/image";
import Router from "next/router";
import Spinner from "public/spinner.svg";
import React, { createContext, useContext, useEffect, useState } from "react";

import { auth, facebookProvider, googleProvider } from "@/firebase/config";
import image from "~/blog.png";
import { setDoc, doc, getFirestore } from "firebase/firestore";
import setDocument from "@/firebase/setData";
const db = getFirestore();
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
                localStorage.setItem("image", user.photoURL || image); // save user photoURL to localStorage
                localStorage.setItem("authenticated", true); // save authentication status to localStorage
            } else {
                setUser({ email: null, uid: null });
                setAuthenticated(false);
                localStorage.removeItem("image"); // remove user photoURL from localStorage
                localStorage.removeItem("authenticated"); // remove authentication status from localStorage
            }
            setLoading(false);
        });

        const authenticatedFromLocalStorage =
            localStorage.getItem("authenticated");
        if (authenticatedFromLocalStorage) {
            setAuthenticated(true);
        }

        return () => unsubscribe();
    }, []);

    const signUp = (email, password, userData, profileData, therapistData) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (result) => {
                const userId = result.user.uid;
                const personalData = "Personal_data";
                const userRef = doc(db, "users", result.user.uid);
                const userDocRef = await setDoc(userRef, userData);
                const therapistDoc = await setDocument(
                    `users/${userId}/${personalData}/therapist`,
                    therapistData
                );
                const profileDoc = await setDocument(
                    `users/${userId}/${personalData}/profile`,
                    profileData
                );

                await sendEmailConfirmation();
            })
            .catch((error) => {
                if (error.code === "auth/email-already-in-use") {
                    window.alert("email-already-in-use");
                }
            });
    };

    const logIn = (email, password) => {
        localStorage.setItem("image", image);
        return signInWithEmailAndPassword(auth, email, password).then(() => {
            const user = auth.currentUser;
            if (user && user.emailVerified) {
                setAuthenticated(true);
            } else {
                // If the user's email is not verified, log them out and show an error message
                auth.signOut(); // Sign-out successful
                setAuthenticated(false);
                alert("Please verify your email before logging in.");
            }
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
    const changePassword = (currentPassword, newPassword) => {
        const user = auth.currentUser;
        console.log("user", user);

        const credential = EmailAuthProvider.credential(
            user.email,
            currentPassword
        );
        console.log("credential", credential);
        reauthenticateWithCredential(user, credential)
            .then(() => {
                updatePassword(user, newPassword)
                    .then(() => {
                        alert("Password updated successfully");
                    })
                    .catch((error) => {
                        // An error occurred while updating the password
                        console.error(error);
                    });
            })
            .catch((error) => {
                // Incorrect password, show an error message
                if (error.code === "auth/wrong-password") {
                    alert("The current password is incorrect");
                }
            });
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
                changePassword,
            }}
        >
            {loading ? (
                <div className='flex justify-center items-center h-screen'>
                    <Image
                        src={Spinner}
                        alt='loading'
                        height={100}
                        width={100}
                    />
                </div>
            ) : (
                children
            )}
        </AuthContext.Provider>
    );
}
