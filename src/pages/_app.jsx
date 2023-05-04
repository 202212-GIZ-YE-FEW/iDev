import { appWithTranslation } from "next-i18next";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import { doc, updateDoc, getFirestore } from "firebase/firestore";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import { AuthContextProvider } from "@/components/context/AuthContext";

import Layout from "@/layout/Layout";
import { useState, useEffect } from "react";
import { useAuth } from "@/components/context/AuthContext";
const db = getFirestore();
const CHECK_AUTH_INTERVAL = 300000; // 5 minutes

function MyApp({ Component, pageProps }) {
    const { user, authenticated } = useAuth();
    useEffect(() => {
        const checkActive = async () => {
            if (authenticated) {
                const docRef = doc(db, `users`, user.uid);
                updateDoc(docRef, {
                    active: true,
                    last_seen: Date.now(),
                });
            }
        };

        // Check authentication status every few minutes
        const intervalId = setInterval(checkActive, CHECK_AUTH_INTERVAL);

        // Clean up interval on unmount
        return () => clearInterval(intervalId);
    }, []);

    if (Component.getLayout) {
        // customized layout
        return (
            <AuthContextProvider>
                <QueryClientProvider client={new QueryClient()}>
                    <Component.getLayout>
                        <Component {...pageProps} />
                    </Component.getLayout>
                </QueryClientProvider>
            </AuthContextProvider>
        );
    } else {
        // default layout
        return (
            <AuthContextProvider>
                <QueryClientProvider client={new QueryClient()}>
                    <Layout requireAuth={pageProps.requireAuth || false}>
                        <Component {...pageProps} />
                        <ToastContainer />
                    </Layout>
                </QueryClientProvider>
            </AuthContextProvider>
        );
    }
}

export default appWithTranslation(MyApp);
