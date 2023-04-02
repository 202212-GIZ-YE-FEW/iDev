import { withTranslation } from "next-i18next";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

import BlogItem from "./RecentBlogItem";
import PageIntro from "../PageIntro";
function RecentBlogsSection({ t }) {
    const recentBlogs = [
        {
            title: t("blog1Title"),
            thumbnail: "blog1",
        },
        {
            title: t("blog2Title"),
            thumbnail: "blog2",
        },
        {
            title: t("blog3Title"),
            thumbnail: "blog3",
        },
    ];
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
                                title={item.title}
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
