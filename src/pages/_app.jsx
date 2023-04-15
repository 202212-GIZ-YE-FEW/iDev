import { appWithTranslation } from "next-i18next";
import { ToastContainer } from "react-toastify";

import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import Layout from "@/layout/Layout";
import { AuthContextProvider } from "@/components/context/AuthContext";

function MyApp({ Component, pageProps }) {
    return (
        <AuthContextProvider>
            <Layout>
                <Component {...pageProps} />
                <ToastContainer />
            </Layout>
        </AuthContextProvider>
    );
}

export default appWithTranslation(MyApp);
