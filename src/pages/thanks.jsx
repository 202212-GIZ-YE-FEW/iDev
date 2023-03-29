import PageIntro from "@/components/PageIntro";
import Button from "@/components/ui/Button";
export default function Thanks(prop) {
    const {
        subtitle = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    } = prop;
    return (
        <>
            <div className='container'>
                <PageIntro title='Thank you!' subtitle={subtitle} />
                <Button content='back to home' textTransform='uppercase' />
            </div>
        </>
    );
}
