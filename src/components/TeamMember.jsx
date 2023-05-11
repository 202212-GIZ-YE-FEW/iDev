import Image from "next/image";
import { withTranslation } from "next-i18next";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const TeamMember = ({ name, job, photo, github, linkedin, t }) => {
    return (
        <>
            <div className='rounded-[25px] w-[11rem] bg-light-cyan'>
                <Image
                    src={photo}
                    alt={`${name} photo`}
                    width={176}
                    height={190}
                    className='rounded-t-[25px]'
                />
                <div className='w-full h-[5px] mt-0 bg-phosphorescent'></div>
                <div className='p-5'>
                    <h5 className='text-xl font-bold tracking-tight text-gray pb-[33px] h-[50px] mb-[40px] text-center'>
                        {t(`${name}`)}
                    </h5>
                    <p className='font-normal text-gray pb-[40px] text-center'>
                        {t(`${job}`)}
                    </p>
                    <div className='flex justify-center space-x-4'>
                        <a
                            href={`https://github.com/${github}`}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <AiFillGithub className='text-2xl text-gray' />
                        </a>
                        <a
                            href={`https://www.linkedin.com/in/${linkedin}`}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <AiFillLinkedin className='text-2xl text-[#0a66c2]' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default withTranslation("team")(TeamMember);
