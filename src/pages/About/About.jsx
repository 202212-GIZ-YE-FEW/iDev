import Image from "next/image";
const About = () => {
    return (
        <div>
            {/* Healing Part */}
            <div className='flex flex-col h-[518]'>
                <div>
                    {/*  Healing 
     (the subject is missing It`s component we will post it later) */}
                </div>
                <div className=' h-[294px] flex justify-center items-center'>
                    {/*   Second div content goes here  */}
                    <div className='h-[234px] w-[1096px]'>
                        <p className='   leading-[2rem] mt-[30px]'>
                            At Healing, we believe there is a better way to do
                            things. A morevaluable way where customers are
                            earned rather than bought. Were obsessively
                            passionate about it, and our mission is to help
                            people achieve it. We focus on search engine
                            optimization. Its one of the least understood and
                            least transparent aspects of great marketing, and we
                            see that as an opportunity. Were excited to simplify
                            SEO for everyone through our software, education,
                            and community.
                        </p>
                    </div>
                </div>
            </div>
            {/* Our Founding Part */}
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
                        Healing was founded by Payam Abubakr in 2021. It was
                        called Healing Online, and started as a blog and an
                        online community where some of the worlds therapists
                        shared their research and ideas. We launched the
                        Beginners Guide to Therapy and our first study, and that
                        hub of industry expertise transformed into a small
                        consulting firm and led us to create the Online
                        Therapist of today!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
