export default function Subscribe(prop) {
    const {
        title = "subscribe",
        subtitle = "We’ll never to spam you or share your email",
        placeholder = "Enter your e-mail",
    } = prop;
    return (
        <>
            <div className='flex flex-col'>
                <span className='text-xl md:text-3xl capitalize font-medium mb-[12px]'>
                    {title}
                </span>
                <p className='text-sm md:text-xl text-light-gray'>{subtitle}</p>
                <form className='mt-[24px]'>
                    <label htmlFor='subscribe-newsletter' class='sr-only'>
                        {title}{" "}
                    </label>
                    <div className='flex max-w-[20rem] bg-white border-2 border-light-gray/80 rounded-md'>
                        <input
                            type='text'
                            id='subscribe-newsletter'
                            className='block flex-1 min-w-0 w-full focus:outline-none text-sm py-2.5 px-3 bg-transparent'
                            placeholder={placeholder}
                        />
                        <span className='inline-flex items-center text-2xl px-3 bg-cyan border-s-2 border-light-gray/80 text-light-black rounded-r-[5px]'>
                            @
                        </span>
                    </div>
                </form>
            </div>
        </>
    );
}
