import React, { createContext, useContext, useEffect, useState } from "react";
import {
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { auth } from "@/firebase/config";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState({ email: null, uid: null });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    email: user.email,
                    uid: user.uid,
                });
            } else {
                setUser({ email: null, uid: null });
            }
        });
        setLoading(false);

        return () => unsubscribe();
    }, []);

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password).catch(
            (error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode === "auth/email-already-in-use") {
                    const emailError = document.getElementById("email-error");
                    emailError.textContent =
                        "The email address is already in use. Please try a different email address.";
                }
                console.error(errorCode, errorMessage);
            }
        );
    };

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = async () => {
        setUser({ email: null, uid: null });
        await signOut(auth);
    };

    return (
        <AuthContext.Provider value={{ user, signUp, logIn, logOut }}>
            {loading ? <div>Loading...</div> : children}
        </AuthContext.Provider>
    );
}
