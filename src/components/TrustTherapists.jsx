import Image from "next/image";

import Button from "./ui/Button";
export default function TrustTherapists() {
    return (
        <>
            <div className='bg-yellow py-16'>
                <div className='container flex flex-col space-y-8 justify-between'>
                    <p className='text-3xl md:text-4xl lg:text-5xl uppercase break-words'>
                        Professional, licensed, and vetted therapists that you
                        can trust
                    </p>
                    <Image
                        src='/trust_therapists.png'
                        alt='trust_therapist'
                        width={600}
                        height={300}
                    />
                    <p className='pb-20'>
                        Tap into the world&apos;s largest network of licensed,
                        accredited, and experienced therapists who can help you
                        with a range of issues including depression, anxiety,
                        relationships, trauma, grief, and more. with our
                        therapists, you get the same professionalism and quality
                        you would expect from an in-office therapist, but with
                        the ability to communicate whenever and however you
                        want.
                    </p>
                    <div className='w-fit'>
                        <Button
                            content='book an appointment'
                            text-transform='uppercase'
                            filled='true'
                            size='large'
                            fontSize='text-lg md:text-xl lg:text-2xl'
                            radius='md'
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
