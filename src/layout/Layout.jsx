import { useAuth } from "@/components/context/AuthContext";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NotPermitted from "@/components/NotPermitted";
import TopProgress from "@/components/TopProgressBar";

export default function Layout({ children, requireAuth }) {
    const { authenticated } = useAuth();
    return (
        <>
            <TopProgress />
            <Navbar />
            {authenticated || !requireAuth ? children : <NotPermitted />}
            <Footer />
        </>
    );
}
