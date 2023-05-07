import { useAuth } from "@/components/context/AuthContext";
import Navbar from "@/components/Navbar";
import NotPermitted from "@/components/NotPermitted";
import TopProgress from "@/components/TopProgressBar";

export default function LayoutChat({ children, requireAuth }) {
    const { authenticated } = useAuth();
    return (
        <>
            <TopProgress />
            <Navbar />
            {authenticated || !requireAuth ? children : <NotPermitted />}
        </>
    );
}
