import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import CommunicateThroughSection from "@/components/Home/communicateSection/CommunicateThroughSection";
import HeroSection from "@/components/Home/HeroSection";
import RecentBlogSection from "@/components/Home/RecentBlogSection/RecentBlogSection";
import TicketSection from "@/components/Home/TicketSection/TicketSection";
import TrustTherapistsSection from "@/components/Home/TrustTherapistSection";
export default function HomePage() {
    return (
        <>
            <HeroSection />
            <section className='bg-yellow py-16'>
                <TrustTherapistsSection />
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

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, "common")),
            // Will be passed to the page component as props
        },
    };
}
