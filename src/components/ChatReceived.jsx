function ChatReceived(props) {
    const { message, time } = props;

    return (
        <div className='flex ms-8 py-2 justify-start relative tri-right left-top max-w-fit min-w-2xl h-auto mt-2 bg-white rounded-xl shadow-sm border-2 border-gray/10'>
            {/* <div className='w-1/12 py-2 flex flex-shrink-0'>
                <img
                    src='https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'
                    className='h-12 w-12 md:h-9 md:w-9 lg:h-12 lg:w-12 shadow-sm border-2 border-gray/10 rounded-full self-end'
                    alt=''
                />
            </div> */}
            <div className='px-3 rounded-xl'>
                <p className='text-sm'>{message}</p>
                <div className='ml-2 flex justify-end items-end'>
                    <span className='text-xs mr-1 text-gray/50'>{time}</span>
                </div>
            </div>
        </div>
    );
}
export default ChatReceived;
