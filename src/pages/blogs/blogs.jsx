import { withTranslation } from "next-i18next";

import "react-multi-carousel/lib/styles.css";

import { useEffect, useState } from "react";
import downloadImage from "@/firebase/getImage";
import getDocument from "@/firebase/getData";
import BlogCard from "@/components/BlogCard";
const Blogs = ({ t }) => {
    const [blogs, setBlogs] = useState([]);
    function getFirst80Chars(str) {
        return str.slice(0, 170);
    }
    useEffect(() => {
        downloadImage();
        const fetchData = async () => {
            try {
                setBlogs(await getDocument("blogs"));
            } catch (e) {
                //
            }
        };

        fetchData();
    }, []);

    return (
        <div className='bg-light-cyan'>
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
                                    id={blog.id}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default withTranslation("blog")(Blogs);
