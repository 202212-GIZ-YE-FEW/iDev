import { withTranslation } from "next-i18next";

import CommunicateThroughSection from "./HomePage/CommunicateThroughSection";
import HeroSection from "./HomePage/HeroSection";
import RecentBlogSection from "./HomePage/RecentBlogSection";
import TicketSection from "./HomePage/TicketSection";
import TrustTherapistSection from "./HomePage/TrustTherapistSection";
function HomePage() {
    return (
        <>
            <HeroSection />
            <section className='bg-yellow py-16'>
                <TrustTherapistSection />
            </section>
            <section className='bg-white py-20'>
                <CommunicateThroughSection />
            </section>
            <section className='bg-light-cyan py-20'>
                <RecentBlogSection />
            </section>
            <section className='bg-white py-20'>
                <TicketSection />
            </section>
        </>
    );
}
export default withTranslation("home")(HomePage);
