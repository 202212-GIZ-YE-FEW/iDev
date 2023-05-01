function ChatReceived(props) {
    const { message, time } = props;

    return (
        <div class='flex flex-row p-2 justify-start'>
            <div class='w-1/12 py-2 flex flex-shrink-0'>
                <img
                    src='https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'
                    class='h-12 w-12 md:h-9 md:w-9 lg:h-12 lg:w-12 rounded-full self-end'
                    alt=''
                />
            </div>
            <div class='bg-gray/10 px-3 p-3 rounded-xl mt-2 relative'>
                <p class='text-sm'>{message}</p>
                <div class='ml-2 flex justify-end items-end'>
                    <span class='text-xs mr-1 text-gray/50'>{time}</span>
                </div>
            </div>
        </div>
    );
}
export default ChatReceived;
