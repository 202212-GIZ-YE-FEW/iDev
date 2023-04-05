import Button from "./ui/Button";

export default function RequirementsSection() {
    return (
        <div className='py-20'>
            <span className='font-normal block text-3xl md:text-4xl rtl:md:text-3xl lg:text-4xl rtl:lg:text-4xl uppercase break-words'>
                Requirements
            </span>
            <Button
                content='Get started'
                textTransform='uppercase'
                filled='true'
                size='large'
                fontSize='text-lg md:text-xl lg:text-2xl'
                radius='md'
            />
        </div>
    );
}
