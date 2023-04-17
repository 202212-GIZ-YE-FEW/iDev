import { doc, getDoc } from "firebase/firestore";
import { useTranslation } from "next-i18next";

import { db } from "@/firebase/config";
import getDocument from "@/firebase/getData";
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

    return <>Blog details</>;
}
export async function getStaticPaths() {
    let blogs = [];
    try {
        const blogDocs = await getDocument("blogs");
        if (blogDocs) {
            blogs = blogDocs.docs.map((blog) => {
                return { ...blog.data(), id: blog.id };
            });
        }
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
    const docRef = doc(db, "blogs", params.pid);
    const data = await getDoc(docRef);
    const blogData = data.data();
    return {
        props: {
            blog: blogData,
        },
    };
}

export default Blog;
