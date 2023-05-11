import {
    createUserWithEmailAndPassword,
    EmailAuthProvider,
    onAuthStateChanged,
    reauthenticateWithCredential,
    sendEmailVerification,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    updatePassword,
    updateProfile,
} from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import Image from "next/image";
import Router from "next/router";
import image from "public/profile-icon.svg";
import Spinner from "public/spinner.svg";
import React, { createContext, useContext, useEffect, useState } from "react";
import toastr from "toastr";

import { auth, facebookProvider, googleProvider } from "@/firebase/config";
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
                    photoURL: user.photoURL || image,
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
                const router = require("next/router").default;
                router.push({
                    pathname: "/login",
                });
            })
            .catch((error) => {
                if (error.code === "auth/email-already-in-use") {
                    toastr.error("Email-already-in-use", "", {
                        closeButton: true,
                        progressBar: true,
                        positionClass: "toast-top-right",
                    });
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
                toastr.warning(
                    "Please verify your email before logging in.",
                    "",
                    {
                        closeButton: true,
                        progressBar: true,
                        positionClass: "toast-top-right",
                    }
                );
            }
        });
    };

    const sendEmailConfirmation = () => {
        const user = auth.currentUser;
        return sendEmailVerification(user)
            .then(() => {
                toastr.info("Verification email sent.", "", {
                    closeButton: true,
                    progressBar: true,
                    positionClass: "toast-top-right",
                });
            })

            .catch((error) => {
                toastr.error(error, "", {
                    closeButton: true,
                    progressBar: true,
                    positionClass: "toast-top-right",
                });
            });
    };

    //SignIn with Google account
    const signInWithGoogleAccount = async () => {
        //Login with Google account

        try {
            await signInWithPopup(auth, googleProvider);
            setAuthenticated(true);
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

        const credential = EmailAuthProvider.credential(
            user.email,
            currentPassword
        );
        reauthenticateWithCredential(user, credential)
            .then(() => {
                updatePassword(user, newPassword)
                    .then(() => {
                        toastr.success("Password updated successfully.", "", {
                            closeButton: true,
                            progressBar: true,
                            positionClass: "toast-top-right",
                        });
                    })
                    .catch((error) => {
                        // An error occurred while updating the password
                        toastr.error(error, "", {
                            closeButton: true,
                            progressBar: true,
                            positionClass: "toast-top-right",
                        });
                    });
            })
            .catch((error) => {
                // Incorrect password, show an error message
                if (error.code === "auth/wrong-password") {
                    toastr.error("The current password is incorrect", "", {
                        closeButton: true,
                        progressBar: true,
                        positionClass: "toast-top-right",
                    });
                }
            });
    };
    const resetPassword = async (email) => {
        try {
            await sendPasswordResetEmail(auth, email);
        } catch (error) {
            console.error(error);
        }
    };
    const updateProfilePhoto = async (photoURL) => {
        const user = auth.currentUser;
        updateProfile(user, { photoURL });
    };

    const deleteuser = async (password) => {
        const user = auth.currentUser;
        if (user) {
            const { uid, email } = user;
            const credential = EmailAuthProvider.credential(email, password);
            reauthenticateWithCredential(user, credential)
                .then(() => {
                    // the user has been reauthenticated
                    user.delete()
                        .then(() => {
                            toastr.success(
                                "User account with email " +
                                    email +
                                    " and uid " +
                                    uid +
                                    "deleted successfully.",
                                "",
                                {
                                    closeButton: true,
                                    progressBar: true,
                                    positionClass: "toast-top-right",
                                }
                            );
                        })
                        .catch((error) => {
                            toastr.error(
                                "Error deleting user account:",
                                error,
                                {
                                    closeButton: true,
                                    progressBar: true,
                                    positionClass: "toast-top-right",
                                }
                            );
                        });
                })
                .catch((error) => {
                    toastr.error(error, "Error reauthenticating user:", {
                        closeButton: true,
                        progressBar: true,
                        positionClass: "toast-top-right",
                    });
                });
        } else {
            toastr.error("No user signed in.", "", {
                closeButton: true,
                progressBar: true,
                positionClass: "toast-top-right",
            });
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
                changePassword,
                resetPassword,
                updateProfilePhoto,
                deleteuser,
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
