import { appWithTranslation } from "next-i18next";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";

import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "../styles/toastr.css";

import { AuthContextProvider } from "@/components/context/AuthContext";
import { TherapistContextProvider } from "@/components/context/TherapistContext";

import Layout from "@/layout/Layout";
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
    if (Component.getLayout) {
        // customized layout
        return (
            <QueryClientProvider client={queryClient}>
                <Component.getLayout>
                    <Component {...pageProps} />
                </Component.getLayout>
            </QueryClientProvider>
        );
    } else {
        // default layout
        return (
            <AuthContextProvider>
                <QueryClientProvider client={queryClient}>
                    <TherapistContextProvider>
                        <Layout requireAuth={pageProps.requireAuth || false}>
                            <Component {...pageProps} />
                            <ToastContainer />
                        </Layout>
                    </TherapistContextProvider>
                </QueryClientProvider>
            </AuthContextProvider>
        );
    }
}

export default appWithTranslation(MyApp);
