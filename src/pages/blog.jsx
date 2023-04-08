import PageIntro from "@/components/PageIntro";
import Image from "next/image";
import { getDocument } from "@/firebase/getData";
import { db } from "@/firebase/config";
import { useEffect, useState } from "react";
import { getDoc, collection, getDocs } from "@firebase/firestore";
import Subscribe from "@/components/Subscribe";

const Blog = ({ title }) => {
    const [blog, setblog] = useState([]);
    const postCollection = collection(db, "blogs");
    useEffect(() => {
        const getblog = async () => {
            const data = await getDocs(postCollection);
            setblog(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getblog();
    }, []);
    return (
        <>
            {blog
                .filter((post) => post.title === "علاج المخاوف الوسواسية")
                .map((post) => (
                    <div key={post.id}>
                        {/* BlogImage */}
                        <div className='container  sm:p-4 lg:m-4 flex justify-center items-center '>
                            <Image
                                src='/blog.png'
                                alt='Blog.png'
                                width={1400}
                                height={530}
                            />
                        </div>

                        <div class='flex flex-col items-center  '>
                            <div className=' text-center lg:mx-auto'>
                                <PageIntro title={post.title} />
                            </div>
                            <div class='self-start sm:p-2 lg:p-8'>
                                <PageIntro subtitle={post.article} />
                            </div>
                        </div>
                        <Subscribe
                            title='Sign up for The Healing blog'
                            subtitle='A weekly, ad-free Blog that helps you stay in the know.'
                            placeholder='Enter your e-mail'
                        />
                    </div>
                ))}
            <></>
        </>
    );
};

export default Blog;
