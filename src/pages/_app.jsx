import { appWithTranslation } from "next-i18next";
import { ToastContainer } from "react-toastify";

import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import { AuthContextProvider } from "@/components/context/AuthContext";

import Layout from "@/layout/Layout";

function MyApp({ Component, pageProps }) {
    if (Component.getLayout) {
        // customized layout
        return (
            <Component.getLayout>
                <Component {...pageProps} />
            </Component.getLayout>
        );
    } else {
        // default layout
        return (
            <AuthContextProvider>
                <Layout requireAuth={pageProps.requireAuth || false}>
                    <Component {...pageProps} />
                    <ToastContainer />
                </Layout>
            </AuthContextProvider>
        );
    }
}

export default appWithTranslation(MyApp);
