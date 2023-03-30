import { useTranslation } from "next-i18next";
import { useEffect } from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
export default function Layout({ i18n, children }) {
    const { t } = useTranslation("common");
    useEffect(() => {
        document.dir = i18n.dir();
    }, [i18n]);
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
