import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import CommunicateThroughSection from "@/components/CommunicateThroughSection";
import HeroSection from "@/components/HeroSection";
import RecentBlogSection from "@/components/RecentBlogSection";
import TicketSection from "@/components/TicketSection";
import TrustTherapistSection from "@/components/TrustTherapistSection";
import Editprofile from "@/pages/editprofile";

export default function HomePage() {
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
            <Editprofile />
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
