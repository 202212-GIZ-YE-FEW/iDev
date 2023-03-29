export default function PageIntro(prop) {
    const { title, subtitle } = prop;
    return (
        <>
            <span className='font-normal  text-5xl block uppercase'>
                {title}
            </span>
            {subtitle && <p className='text-2xl text-black/50'>{subtitle}</p>}
        </>
    );
}

// Example of using
// 1. <PageIntro title="title here" subtitle="sub-title here"/>
// 2. <PageIntro title="title here" />
