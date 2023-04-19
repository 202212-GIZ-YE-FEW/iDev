import { withTranslation } from "next-i18next";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

import BlogItem from "@/components/BlogItem";
const BlogsSection = ({
    t,
    textSize = "text-3xl md:text-4xl rtl:md:text-3xl lg:text-5xl rtl:lg:text-4xl",
    title = "recentBlogsTitle",
    blogs = [],
}) => {
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
            <div className='flex flex-col space-y-16 justify-between'>
                <p
                    className={
                        textSize + "font-normal block uppercase break-words"
                    }
                >
                    {t(`${title}`)}
                </p>
                <Carousel infinite='true' responsive={responsive}>
                    {blogs?.map((item, index) => {
                        return (
                            <BlogItem
                                key={index}
                                ar_title={item.body.ar_title}
                                en_title={item.body.en_title}
                                id={item.id}
                                isOdd={index % 2 === 0 ? false : true}
                            />
                        );
                    })}
                </Carousel>
            </div>
        </>
    );
};
export default withTranslation("blog")(BlogsSection);
