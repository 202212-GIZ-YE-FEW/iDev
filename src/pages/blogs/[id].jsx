import { i18n } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import RecentBlogSection from "@/components/Homepage/RecentBlogSection";
import PageIntro from "@/components/PageIntro";
import Subscribe from "@/components/Subscribe";

import getDocument from "@/firebase/getData";
import getSingleDoc from "@/firebase/getDocument";
function Blog({ blog }) {
    return (
        <div className='container parent-div flex flex-col justify-center items-center'>
            <div className='m-8 w-full max-h-[700px]'>{i18n.language}</div>

            {i18n.language == "en" ? (
                <>
                    <div className='flex center text-center sm:justify-center word-wrap:break-word  '>
                        <div className='text-center justify-center '>
                            <PageIntro title={blog?.en_title} />
                        </div>
                    </div>
                    <div className='flex-none w-full'>
                        <PageIntro subtitle={blog?.en_article} />
                    </div>
                </>
            ) : (
                <>
                    <div className='flex center text-center sm:justify-center word-wrap:break-word  '>
                        <div className='  text-center justify-center '>
                            <PageIntro title={blog?.ar_title} />
                        </div>
                    </div>
                    <div className='flex-none w-full'>
                        <PageIntro subtitle={blog?.ar_article} />
                    </div>
                </>
            )}

            <div className='flex-none w-full m-4'>
                <div className='flex justify-start'>
                    <Subscribe />
                </div>
            </div>
            <section className='p-8'>
                <RecentBlogSection />
            </section>
        </div>
    );
}
export async function getStaticPaths() {
    let blogs = [];
    try {
        blogs = await getDocument("blogs");
    } catch (error) {
        //
    }
    const paths = blogs.map((blog) => {
        return {
            params: {
                id: blog.id,
            },
        };
    });
    return {
        paths,
        fallback: false,
    };
}
export async function getStaticProps({ locale, params }) {
    let blog = null;
    try {
        blog = await getSingleDoc("blogs", params.id);
    } catch (error) {
        //
    }

    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            blog,
        },
    };
}

export default Blog;
