export default function PageIntro(props) {
    const { title, subtitle } = props;

    return (
        <div className='mb-5'>
            <span className='font-normal block text-3xl md:text-4xl rtl:md:text-3xl lg:text-4xl rtl:lg:text-4xl uppercase break-words'>
                {title}
            </span>
            {subtitle && (
                <p className='text-lg md:text-xl lg:text-2xl text-black/50'>
                    {subtitle}
                </p>
            )}
        </div>
    );
}

// Example of using
// 1. <PageIntro title="title here" subtitle="sub-title here"/>
// 2. <PageIntro title="title here" />
