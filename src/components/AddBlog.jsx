import Button from "@/components/ui/Button";
import PageIntro from "@/components/PageIntro";
import { withTranslation } from "next-i18next";
import { useAuth } from "@/components/context/AuthContext";

const AddBlog = ({ t }) => {
    const { authenticated } = useAuth();
    const handleClick = () => {
        const router = require("next/router").default;
        router.push({
            pathname: "/blogs/create",
        });
    };

    return (
        <>
            {authenticated ? (
                <>
                    <div className='  pt-8 pb-6'>
                        <PageIntro
                            title={t("shareYourBlogPost")}
                            subtitle={t("submitYourBlog")}
                        />
                        <Button
                            content={t("addYourBlog")}
                            textTransform='uppercase'
                            filled='true'
                            size='large'
                            fontSize='text-lg md:text-xl lg:text-2xl'
                            radius='md'
                            onClick={handleClick}
                        />
                    </div>
                </>
            ) : (
                <></>
            )}
        </>
    );
};
export default withTranslation("blog")(AddBlog);
