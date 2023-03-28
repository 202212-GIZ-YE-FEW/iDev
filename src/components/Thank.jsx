import PageIntro from "./PageIntro";
import Button from "./ui/Button";
export default function Thanks(prop) {
    const { title, subtitle } = prop;
    return (
        <>
            <PageIntro title={title} subtitle={subtitle} />
            <Button />
        </>
    );
}
