function ChatReceived(props) {
    const { message, time } = props;

    return (
        <div className='flex p-2 justify-start'>
            <div className='w-1/12 py-2 flex flex-shrink-0'>
                <img
                    src='https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'
                    className='h-12 w-12 md:h-9 md:w-9 lg:h-12 lg:w-12 shadow-sm border-2 border-gray/10 rounded-full self-end'
                    alt=''
                />
            </div>
            <div className='bg-white/80 shadow-sm border-2 border-gray/10 p-3 rounded-xl mt-2'>
                <p className='text-sm'>{message}</p>
                <div className='ml-2 flex justify-end items-end'>
                    <span className='text-xs mr-1 text-gray/50'>{time}</span>
                </div>
            </div>
        </div>
    );
}
export default ChatReceived;
