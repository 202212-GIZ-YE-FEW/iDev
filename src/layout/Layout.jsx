import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
// import TopProgress from "@/components/TopProgressBar";

export default function Layout({ children }) {
    return (
        <>
            {/* <TopProgress /> */}
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
