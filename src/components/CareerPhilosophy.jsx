import { withTranslation } from "next-i18next";

import Button from "./ui/Button";

const CareerPhilosophy = ({ t }) => {
    return (
        <div>
            <div className='lg:text-xl text-base leading-6 lg:mt-24 mt-16 lg:ms-28 ms-10 lg:me-52 md:me-20 me-10 text-[#696f72]'>
                {t("ourSeoSoftware")}
            </div>

            <div className='lg:text-2xl text-lg leading-6 mt-20 lg:ms-28 ms-10 text-[#696f72]'>
                <h3>{t("whatRole")}</h3>
            </div>

            <div className=' mt-4 lg:ms-28 mb-8 ms-10 '>
                <Button
                    content={t("SeeOurOpenList")}
                    textTransform='uppercase'
                    filled='true'
                    size='large'
                    fontSize='text-lg md:text-xl lg:text-2xl'
                    radius='md'
                />
            </div>

            <div className='text-gray bg-yellow pt-4 pb-4'>
                <div className='lg:text-5xl md:text-3xl text-2xl leading-6 mt-10 lg:ms-28 ms-10'>
                    <h1>{t("ourHiringPhi")}</h1>
                </div>
                <div className='lg:text-lg text-base leading-6 mt-6 lg:ms-28 ms-10 lg:me-52 md:me-20 me-10 mb-8'>
                    {t("toBuildTheVeryBestSeo")}
                </div>
            </div>
        </div>
    );
};

export default withTranslation("career")(CareerPhilosophy);
