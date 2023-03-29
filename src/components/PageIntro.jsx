export default function PageIntro(prop) {
    const { title, subtitle } = prop;
    return (
        <>
            <span className='font-normal text-3xl md:text-4xl lg:text-5xl block uppercase'>
                {title}
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
