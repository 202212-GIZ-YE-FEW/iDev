import Image from "next/image";
import { withTranslation } from "next-i18next";

function BlogItem({ title, thumbnail, isOdd }) {
    return (
        <>
            <div className='relative'>
                <Image
                    src={`/home/${thumbnail}.svg`}
                    alt={`${title} svg`}
                    width={200}
                    height={160}
                    sizes='(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw'
                    style={{ height: "100%", width: "100%" }}
                />
                {isOdd ? (
                    <div className='w-32 absolute bottom-2 left-2'>
                        <p className='uppercase text-base box-decoration-clone inline leading-7 bg-light-gray text-white px-2'>
                            {title}
                        </p>
                    </div>
                ) : (
                    <p className='uppercase absolute top-2 left-2 text-base text-white px-2'>
                        {title}
                    </p>
                )}
            </div>
        </>
    );
}
export default withTranslation("home")(BlogItem);
