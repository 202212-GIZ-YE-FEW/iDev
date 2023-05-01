function ChatReceived(props) {
    const { sender, message } = props;

    return (
        <div className='w-2/3 self-end p-3 rounded-lg'>
            <div className='flex items-center flex-row-reverse'>
                <div className='inline-flex items-center justify-center h-10 w-10 rounded-full bg-light-gray flex-shrink-0'>
                    {sender}
                </div>
                <div className='relative me-3 text-sm bg-yellow py-2 px-4 shadow rounded-xl'>
                    <div>{message}</div>
                </div>
            </div>
        </div>
    );
}
export default ChatReceived;
