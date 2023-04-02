import { useTranslation } from "next-i18next";
export default function PageIntro(prop) {
    const { title, subtitle } = prop;
    const { t } = useTranslation("signup");
    return (
        <>
            <span className='font-normal text-2xl md:text-3xl lg:text-2xl block uppercase'>
                {t(title)}
            </span>
            {subtitle && (
                <p className='text:lg md:text:xl text-2xl text-black/50 mb-5'>
                    {subtitle}
                </p>
            )}
        </>
    );
}

// Example of using
// 1. <PageIntro title="title here" subtitle="sub-title here"/>
// 2. <PageIntro title="title here" />
