import PageIntro from "@/components/PageIntro";
import Image from "next/image";
import { db } from "@/firebase/config";
import { useEffect, useState } from "react";
import { collection, query, where, onSnapshot } from "@firebase/firestore";
import Subscribe from "@/components/Subscribe";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { extractFirstName } from "@/pages/create_blog";
import { useRouter } from "next/router";
import RecentBlogSection from "@/components/Homepage/RecentBlogSection";
import downloadImage from "@/firebase/getImage";
const Blog = () => {
    const router = useRouter();
    const { en_title } = router.query;
    const title = String(en_title);

    const { i18n } = useTranslation("common");
    const [blogData, setBlogData] = useState([]);
    const blogsCollectionRef = collection(db, "blogs");
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        const q = query(blogsCollectionRef, where("en_title", "==", en_title));
        let blogs = [];
        onSnapshot(q, (snapshot) => {
            blogs = [];
            snapshot.docs.forEach((doc) => {
                blogs.push({ ...doc.data(), id: doc.id });
            });
            setBlogData(blogs);
        });
        const ImageName = extractFirstName(title);
        downloadImage(ImageName, "blogImages").then((url) => {
            setImageUrl(url);
        });
    }, [title]);

    return <></>;
};

export default Blog;
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "home"])),
            // Will be passed to the page component as props
        },
    };
}
