function ChatLabel(props) {
    const { label } = props;

    return (
        <div className='mt-10 flex items-center text-center text-sm text-white mx-auto bg-gray/40 shadow-sm rounded-full px-4 py-1 border border-gray/10'>
            {label}
        </div>
    );
}
export default ChatLabel;
