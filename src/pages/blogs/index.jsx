import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import "react-multi-carousel/lib/styles.css";

import AddBlog from "@/components/AddBlog";
import BlogCard from "@/components/BlogCard";

import getDocument from "@/firebase/getData";

const Blogs = ({ blogs }) => {
    const { t } = useTranslation("common");
    return (
        <>
            <Head>
                <title>{t("blogs")}</title>
            </Head>
            <div className='container'>
                <div className='flex flex-wrap justify-around  '>
                    {blogs.map((blog) => (
                        <div key={blog.id}>
                            <div className='w-1/5 md:w-1/3 lg:w-1/5 ml-4 mr-4 '>
                                <BlogCard
                                    en_title={blog.body.en_title}
                                    en_article={
                                        blog.body.en_article.substring(0, 170) +
                                        "..."
                                    }
                                    ar_title={blog.body.ar_title}
                                    ar_article={
                                        blog.body.ar_article.substring(0, 170) +
                                        "..."
                                    }
                                    id={blog.id}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <AddBlog />
        </>
    );
};

export default Blogs;

export async function getStaticProps({ locale }) {
    let blogs = [];
    try {
        blogs = await getDocument("blogs");
    } catch (error) {
        //
    }
    return {
        props: {
            ...(await serverSideTranslations(locale, "common")),
            blogs,
        },
    };
}
