import { useTranslation } from "next-i18next";

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
export async function getStaticPaths({ locale }) {
    let blogs = [];
    try {
        blogs = await getDocument("blogs");
    } catch (error) {
        //
    }

    const paths = blogs.map((blog) => {
        return {
            params: {
                id: String(blog.id),
            },
        };
    });
    return {
        paths,
        fallback: false,
    };
}
export async function getStaticProps({ params }) {
    let blog = null;
    try {
        blog = await getSingleDoc("blogs", params.id);
    } catch (error) {
        //
    }
    return { props: { blog } };
}

export default Blog;
