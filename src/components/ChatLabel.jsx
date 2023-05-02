function ChatLabel(props) {
    const { label } = props;

    return (
        <div className='mt-10 flex items-center text-center text-sm text-gray/60 mx-auto bg-white/80 shadow-sm rounded-md px-4 py-1 border border-gray/10'>
            {label}
        </div>
    );
}
export default ChatLabel;
