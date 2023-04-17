import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import HomePage from "@/components/HomePage";

import getDocument from "@/firebase/getData";

export default function Index() {
    return (
        <>
            <HomePage />
        </>
    );
}
export async function getStaticProps({ locale }) {
    let blogs = [];
    try {
        const blogDocs = await getDocument("blogs");
        if (blogDocs) {
            blogs = blogDocs.docs.map((blog) => {
                return { ...blog.data(), id: blog.id };
            });
        }
    } catch (error) {
        //
    }
    return {
        props: {
            ...(await serverSideTranslations(locale, "common")),
            blogs,
            // Will be passed to the page component as props
        },
    };
}
