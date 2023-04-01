import { withTranslation } from "next-i18next";

import BlogItem from "./BlogItem";
import PageIntro from "../PageIntro";
function RecentBlogs({ t }) {
    const recentBlogs = [
        {
            title: t("blog1Title"),
            thumbnail: "blog1",
        },
        {
            title: t("blog2Title"),
            thumbnail: "blog2",
        },
    ];
    return (
        <>
            <div className='container flex flex-col space-y-20 justify-between'>
                <PageIntro title={t("recentBlogsTitle")} />
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
                    {recentBlogs.map((item, index) => {
                        return (
                            <>
                                <BlogItem
                                    key={item.key}
                                    title={item.title}
                                    thumbnail={item.thumbnail}
                                    isOdd={index % 2 === 0 ? false : true}
                                />
                                <BlogItem
                                    key={item.key}
                                    title={item.title}
                                    thumbnail={item.thumbnail}
                                    isOdd={index % 2 === 0 ? false : true}
                                />
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
export default withTranslation("home")(RecentBlogs);
