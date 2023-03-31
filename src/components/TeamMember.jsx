import Image from "next/image";
import { withTranslation } from "next-i18next";
const TeamMember = ({ name, job, photo, t }) => {
    return (
        <>
            <div className='rounded-[25px] w-[11rem] bg-light-cyan'>
                <Image
                    src={photo}
                    alt={`${name} photo`}
                    width={176}
                    height={190}
                />
                <div className='w-full h-[5px] mt-0 bg-phosphorescent'></div>
                <div className='p-5'>
                    <h5 className='text-xl font-bold tracking-tight text-gray pb-[33px] h-[50px] mb-[40px] text-center'>
                        {t(`${name}`)}
                    </h5>
                    <p className='font-normal text-gray pb-[40px] text-center'>
                        {t(`${job}`)}
                    </p>
                </div>
            </div>
        </>
    );
};

export default withTranslation("team")(TeamMember);
