import React, { createContext, useContext, useEffect, useState } from "react";
import {
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification,
    signOut,
} from "firebase/auth";
import { auth } from "@/firebase/config";
import { isLoggedIn } from "@/firebase/firebaseProvidersMethods";

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
                setAuthenticated(true);
            } else {
                setUser({ email: null, uid: null });
                setAuthenticated(false);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = async () => {
        setUser({ email: null, uid: null });
        setAuthenticated(false);
        await signOut(auth);
    };
    const sendEmailConfirmation = () => {
        const user = auth.currentUser;
        return sendEmailVerification(user)
            .then(() => console.log("Verification email sent."))
            .catch((error) => console.error(error));
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                authenticated,
                signUp,
                logIn,
                logOut,
                sendEmailConfirmation,
            }}
        >
            {loading ? <div>Loading...</div> : children}
        </AuthContext.Provider>
    );
}
