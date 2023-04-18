import { getI18nPaths } from "getI18nPaths";
import { i18n, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import RecentBlogSection from "@/components/Homepage/RecentBlogSection";
import PageIntro from "@/components/PageIntro";
import Subscribe from "@/components/Subscribe";

import getDocument from "@/firebase/getData";
import getSingleDoc from "@/firebase/getDocument";
function Blog({ blog }) {
    // const router = useRouter();
    // const { en_title } = router.query;
    // const title = String(en_title);

    const { i18n } = useTranslation("common");
    // const [blogData, setBlogData] = useState([]);
    // const blogsCollectionRef = collection(db, "blogs");
    // const [imageUrl, setImageUrl] = useState(null);

    // useEffect(() => {
    //     const q = query(blogsCollectionRef, where("en_title", "==", en_title));
    //     let blogs = [];
    //     onSnapshot(q, (snapshot) => {
    //         blogs = [];
    //         snapshot.docs.forEach((doc) => {
    //             blogs.push({ ...doc.data(), id: doc.id });
    //         });
    //         setBlogData(blogs);
    //     });
    //     const ImageName = extractFirstName(title);
    //     downloadImage(ImageName, "blogImages").then((url) => {
    //         setImageUrl(url);
    //     });
    // }, [title]);

    return (
        <div className='container parent-div flex flex-col justify-center items-center'>
            <div className='m-8 child-div-1 w-full max-h-[700px]  '></div>

            {i18n.language == "en" ? (
                <>
                    <div className='  child-div-2 flex center text-center sm:justify-center word-wrap:break-word  '>
                        <div className='  text-center justify-center '>
                            <PageIntro title={blog?.en_title} />
                        </div>
                    </div>
                    <div className='child-div-3 flex-none w-full'>
                        <PageIntro subtitle={blog?.en_article} />
                    </div>
                </>
            ) : (
                <>
                    <div className='  child-div-2 flex center text-center sm:justify-center word-wrap:break-word  '>
                        <div className='  text-center justify-center '>
                            <PageIntro title={blog?.ar_title} />
                        </div>
                    </div>
                    <div className='child-div-3 flex-none w-full'>
                        <PageIntro subtitle={blog?.ar_article} />
                    </div>
                </>
            )}

            <div className='child-div-3 flex-none w-full m-4'>
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
    // let paths = [];
    try {
        blogs = await getDocument("blogs");
    } catch (error) {
        //
    }
    // for (const blog of blogs) {
    //     for (const locale of getI18nPaths()) {
    //       paths.push({params: {locale, id: blog.id}})
    //     }
    // }
    // const paths = blogs.map((blog) => {
    //     return {
    //         params: {
    //             id: blog.id,
    //         },
    //     };
    // });
    console.log("before paths");
    // console.log(paths);
    console.log("before paths");
    return {
        paths: getI18nPaths(),
        fallback: false,
    };
}
export async function getStaticProps({
    params: { id, locale = i18n.language },
}) {
    let blog = null;
    try {
        blog = await getSingleDoc("blogs", id);
    } catch (error) {
        console.log("hiii from errorrrrrrrrrrrrrrrrr");
    }
    console.log("before");
    console.log(blog);
    console.log("after");
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            blog,
        },
    };
}

export default Blog;
