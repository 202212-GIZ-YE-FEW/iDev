import { appWithTranslation } from "next-i18next";
import { ToastContainer } from "react-toastify";

import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import Layout from "@/layout/Layout";

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
            <ToastContainer />
        </Layout>
    );
}

export default appWithTranslation(MyApp);
