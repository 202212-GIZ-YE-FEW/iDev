import { withTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { db } from "@/firebase/config";
import { extractFirstName } from "@/pages/create_blog";
import PageIntro from "@/components/PageIntro";
import BlogItem from "@/components/Homepage/RecentBlogItem";
import { collection } from "firebase/firestore";
import getDocument from "@/firebase/getData";
function RecentBlogsSection({ t }) {
    const [blogsList, setBlogList] = useState([]);
    const collectionBlogsRef = collection(db, "blogs");
    useEffect(() => {
        const fetchData = async () => {
            const data = await getDocument("blogs");
            setBlogList(data);
        };
        fetchData();
    }, []);

    const recentBlogs = blogsList.map((blog) => {
        return {
            thumbnail: extractFirstName(blog.en_title),
            en_title: blog.en_title,
            ar_title: blog.ar_title,
            en_article: blog.en_article,
            ar_article: blog.ar_article,
        };
    });

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <>
            <div className='container flex flex-col space-y-20 justify-between'>
                <PageIntro title={t("recentBlogsTitle")} />
                <Carousel infinite='true' responsive={responsive}>
                    {recentBlogs.map((item, index) => {
                        return (
                            <BlogItem
                                key={index}
                                ar_title={item.ar_title}
                                en_title={item.en_title}
                                en_article={item.en_article}
                                ar_article={item.ar_article}
                                thumbnail={item.thumbnail}
                                isOdd={index % 2 === 0 ? false : true}
                            />
                        );
                    })}
                </Carousel>
            </div>
        </>
    );
}
export default withTranslation("home")(RecentBlogsSection);
