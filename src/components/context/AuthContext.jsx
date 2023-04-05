import React, { createContext, useContext, useEffect, useState } from "react";
import {
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { auth } from "@/firebase-config/firebase";

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
        return createUserWithEmailAndPassword(auth, email, password);
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
