import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import CommunicateThrough from "@/components/communicate/CommunicateThrough";
import Hero from "@/components/Hero";
import RecentBlogs from "@/components/Blog/RecentBlogs";
import TicketSection from "@/components/Tickets/TicketSection";
import TrustTherapists from "@/components/TrustTherapists";
export default function HomePage() {
    return (
        <>
            <Hero />
            <section className='bg-yellow py-16'>
                <TrustTherapists />
            </section>
            <section className='bg-white py-20'>
                <CommunicateThrough />
            </section>
            <section className='bg-light-cyan py-20'>
                <RecentBlogs />
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
