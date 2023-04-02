import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import CommunicateThroughSection from "@/components/home/CommunicateThroughSection";
import HeroSection from "@/components/home/HeroSection";
import RecentBlogSection from "@/components/home/RecentBlogSection";
import TicketSection from "@/components/home/TicketSection";
import TrustTherapistsSection from "@/components/home/TrustTherapistsSection";
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
