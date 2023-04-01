import { useTranslation } from "next-i18next";

export default function FormTitle({ title }) {
    const { t } = useTranslation("common");
    return (
        <>
            <span className=' uppercase font-normal  md:text-xl lg:text-3xl  leading-75 text-center tracking-tighter'>
                {t(title)}
            </span>
        </>
    );
}
