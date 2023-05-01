function ChatSent(props) {
    const { sender, message } = props;

    return (
        <div className='w-2/3 self-start p-3 rounded-lg'>
            <div className='flex items-center'>
                <div className='inline-flex items-center justify-center h-10 w-10 rounded-full bg-light-gray flex-shrink-0'>
                    {sender}
                </div>
                <div className='relative ms-3 text-sm bg-light-cyan py-2 px-4 shadow rounded-xl'>
                    <div>{message}</div>
                </div>
            </div>
        </div>
    );
}
export default ChatSent;