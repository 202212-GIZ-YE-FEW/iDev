import Link from "next/link";

import PageIntro from "@/components/PageIntro";
import Button from "@/components/ui/Button";

import Layout from "@/layout/Layout";
export default function Thanks(prop) {
    const {
        subtitle = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    } = prop;
    return (
        <Layout>
            <div className='container my-20'>
                <PageIntro title='Thank you!' subtitle={subtitle} />
                <Link href='/'>
                    <Button
                        content='back to home'
                        textTransform='uppercase'
                        radius='md'
                        fontSize='text-lg md:text-xl lg:text-2xl'
                    />
                </Link>
            </div>
        </Layout>
    );
}
