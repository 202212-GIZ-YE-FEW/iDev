const { default: FoundingSection } = require("./FoundingSection");

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
            {/* Our Founding Section */}

            <FoundingSection />
        </div>
    );
};

export default About;
