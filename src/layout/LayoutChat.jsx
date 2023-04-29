import Navbar from "@/components/Navbar";
import TopProgress from "@/components/TopProgressBar";

export default function LayoutChat({ children }) {
    return (
        <>
            <TopProgress />
            <Navbar />
            {children}
        </>
    );
}
