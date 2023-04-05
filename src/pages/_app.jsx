import { appWithTranslation } from "next-i18next";

import "@/styles/globals.css";

import Layout from "@/layout/Layout";
import { AuthContextProvider } from "@/components/context/AuthContext";

function MyApp({ Component, pageProps }) {
    return (
        <AuthContextProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AuthContextProvider>
    );
}

export default appWithTranslation(MyApp);
