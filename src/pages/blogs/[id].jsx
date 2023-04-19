import { getDownloadURL, ref } from "firebase/storage";
import Image from "next/image";
import { i18n } from "next-i18next";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";

import BlogsSection from "@/components/BlogsSection";
import PageIntro from "@/components/PageIntro";
import Subscribe from "@/components/Subscribe";

import { storage } from "@/firebase/config";
import getDocument from "@/firebase/getData";
import getDocById from "@/firebase/getDocById";
function Blog({ blog }) {
    const [imageUrl, setImageUrl] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    useEffect(() => {
        const imageRef = ref(storage, `blogImages/${blog?.id}`);
        const getRelatedBlogs = async () => {
            try {
                setRelatedBlogs(await getDocument("blogs"));
            } catch (e) {
                //
            }
        };
        getRelatedBlogs();
        getDownloadURL(imageRef)
            .then((url) => {
                setImageUrl(url);
            })
            .catch((error) => {
                // handle the error
            });
    }, [blog.id]);
    return (
        <div className='container flex flex-col justify-center items-center'>
            <section className='w-full max-h-[500px] my-16'>
                <Image
                    className='object-cover w-full h-full rounded-3xl'
                    src={
                        imageUrl ||
                        "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                    }
                    alt='Blog.png'
                    width={700}
                    height={250}
                />
            </section>
            {i18n.language == "en" ? (
                <section>
                    <div className='flex text-center justify-center word-wrap:break-word'>
                        <PageIntro title={blog?.body.en_title} />
                    </div>
                    <div className='w-full text-black font-light text-base md:text-lg lg:text-xl uppercase !leading-[32px]'>
                        {blog?.body.en_article}
                    </div>
                </section>
            ) : (
                <section>
                    <div className='flex text-center justify-center word-wrap:break-word'>
                        <PageIntro title={blog?.body.ar_title} />
                    </div>
                    <div className='w-full text-black font-light text-base md:text-lg lg:text-xl uppercase !leading-[32px]'>
                        {blog?.body.ar_article}
                    </div>
                </section>
            )}

            <section className='w-full my-16'>
                <Subscribe
                    title='signUpForBlog'
                    subtitle='newsletterEncourage'
                />
            </section>
            <section className='self-start container px-0 my-16'>
                <BlogsSection
                    textSize='text-xl md:text-2xl rtl:md:text-xl lg:text-3xl rtl:lg:text-2xl'
                    title='common:recommendedForYou'
                    blogs={relatedBlogs}
                />
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
        blog = await getDocById("blogs", params.id);
    } catch (error) {
        //
    }

    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "blog"])),
            blog,
        },
    };
}

export default withTranslation("blog")(Blog);
