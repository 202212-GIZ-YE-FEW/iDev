import Image from "next/image";
const FoundingSection = () => {
    return (
        <div className='flex flex-col md:flex-row mw-[1440px] h-[400px] md:gap-[200px] md:mw-[1024px] gap-[66px] bg-light-cyan'>
            <div className='w-full md:w-[590px] h-[320px]'>
                <Image
                    className='mb-10 mt-[40px] md:ml-[191px] md:mb-[40px]'
                    src='/./../public/OurFounding.png'
                    alt='My Image'
                    width={400}
                    height={320}
                />
            </div>
            <div className='w-full md:w-[950px] mt-[66px]'>
                <h1 className='bg-red w-full md:w-[363px] h-[47px] text-3xl font-sans mb-4 md:mb-0'>
                    Our Founding
                </h1>
                <p className='w-full md:w-[641px] h-[195px] leading-[2.5rem]'>
                    Healing was founded by Payam Abubakr in 2021. It was called
                    Healing Online, and started as a blog and an online
                    community where some of the worlds therapists shared their
                    research and ideas. We launched the Beginners Guide to
                    Therapy and our first study, and that hub of industry
                    expertise transformed into a small consulting firm and led
                    us to create the Online Therapist of today!
                </p>
            </div>
        </div>
    );
};

export default FoundingSection;
