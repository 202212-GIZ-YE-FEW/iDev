import { withTranslation } from "next-i18next";

import CommunicateThroughSection from "./Homepage/CommunicateThroughSection";
import HeroSection from "./Homepage/HeroSection";
import RecentBlogSection from "./Homepage/RecentBlogSection";
import TicketSection from "./Homepage/TicketSection";
import TrustTherapistSection from "./Homepage/TrustTherapistSection";
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
            <section className='bg-light-cyan py-20 id="recentblog'>
                <RecentBlogSection />
            </section>
            <section className='bg-white py-20'>
                <TicketSection />
            </section>
        </>
    );
}
export default withTranslation("home")(HomePage);
