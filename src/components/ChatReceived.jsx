function ChatReceived(props) {
    const { message, time } = props;

    return (
        <div className='flex ms-8 py-2 justify-start relative left-top w-fit max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl h-auto my-2 bg-white rounded-xl shadow-sm border-2 border-gray/10'>
            <div className='px-3 rounded-xl'>
                <p className='text-sm break-all'>{message}</p>
                <div className='ms-2 flex justify-end items-end'>
                    <span className='text-xs mr-1 text-gray/50'>{time}</span>
                </div>
            </div>
        </div>
    );
}
export default ChatReceived;
