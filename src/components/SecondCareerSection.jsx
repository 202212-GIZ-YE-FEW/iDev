import { withTranslation } from "next-i18next";

function SecondCareerSection({ jobTitle, description, department, t }) {
    return (
        <div className=' p-4 flex flex-row cursor-pointer shadow-sm '>
            <div className='basis-3/4 flex flex-col'>
                <h3 className='lg:text-2xl text-lg font-medium  self-start text-[#06b6d4]'>
                    {jobTitle}
                </h3>
                <p className='self-start lg:text-base text-sm text-[#b2a7a7] '>
                    {description}
                </p>
            </div>

            <div className='basis-1/4  flex flex-col items-stretch ps-4'>
                <h3 className='lg:text-xl text-base leading-8 self-end text-[#06b6d4]'>
                    {t("Engineering")}
                </h3>
                <p className=' self-end lg:text-base text-sm text-[#b2a7a7]'>
                    {department}
                </p>
            </div>
        </div>
    );
}

export default withTranslation("career")(SecondCareerSection);
