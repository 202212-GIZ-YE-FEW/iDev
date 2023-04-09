import { appWithTranslation } from "next-i18next";

import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import Layout from "@/layout/Layout";

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default appWithTranslation(MyApp);
