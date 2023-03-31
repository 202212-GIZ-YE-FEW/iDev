// import { useEffect } from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
export default function Layout({ children }) {
    // useEffect(() => {
    //     document.dir = i18n.dir();
    // }, [i18n]);
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
