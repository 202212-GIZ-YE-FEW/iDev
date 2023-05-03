import "react-multi-carousel/lib/styles.css";
import getDocument from "@/firebase/getData";
import BlogCard from "@/components/BlogCard";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Blogs = ({ blogs }) => {
    return (
        <div className='container'>
            <div className='flex flex-wrap justify-around  '>
                {blogs.map((blog) => (
                    <div key={blog.id}>
                        <div className='w-1/5 md:w-1/3 lg:w-1/5 ml-4 mr-4 '>
                            <BlogCard
                                en_title={blog.body.en_title}
                                en_article={
                                    getFirst80Chars(blog.body.en_article) +
                                    "..."
                                }
                                ar_title={blog.body.ar_title}
                                ar_article={
                                    getFirst80Chars(blog.body.ar_article) +
                                    "..."
                                }
                                id={blog.id}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
function getFirst80Chars(str) {
    return str.slice(0, 170);
}
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

            // Will be passed to the page component as props
        },
    };
}
