import * as React from "react";

import Footer from "@/components/Footer";
export default function Layout({ children }) {
    // Put Header or Footer around the children element
    // Example
    return (
        <>
            {/* <Navbar /> */}
            {children}
            <Footer />
        </>
    );

    // return <>{children}</>;
}
