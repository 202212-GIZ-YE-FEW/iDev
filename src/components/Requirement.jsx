export default function Requirement(props) {
    const { title, subtitle } = props;
    return (
        <div className='flex flex-col md:flex-row mb-5'>
            <div className='w-full'>
                <span className='font-semibold text-xl uppercase'>{title}</span>
                <p className='font-normal text-md lg:text-xl text-gray capitalize'>
                    {subtitle}
                </p>
            </div>
        </div>
    );
}
