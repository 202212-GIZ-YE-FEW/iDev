import Image from "next/image";
const TeamMember = ({ title, job, photo }) => {
    return (
        <>
            {/* Single Card */}

            <div className=' w-[176px] rounded-[25px] max-w-sm  bg-light-cyan'>
                <Image src={photo} alt='My Image' width={176} height={190} />
                <div className='bg-black w-full h-[5px] mt-0 bg-phosphorescent '></div>
                <div className='p-5'>
                    <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white pb-[33px]'>
                        {title}
                    </h5>
                    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400 pb-[40px]'>
                        {job}.
                    </p>
                </div>
            </div>
        </>
    );
};

export default TeamMember;
