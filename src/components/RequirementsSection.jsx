import { withTranslation } from "next-i18next";

import Button from "./ui/Button";
import Link from "next/link";
function RequirementsSection({ t, requirements }) {
    return (
        <div className='py-8'>
            <span className='mb-3 font-normal block text-3xl md:text-4xl rtl:md:text-3xl lg:text-4xl rtl:lg:text-4xl uppercase break-words'>
                {t("requirements")}
            </span>
            <div className='mb-5 px-5'>
                {requirements && (
                    <ul className='font-normal text-md lg:text-xl text-black capitalize list-disc'>
                        {requirements.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                )}
            </div>
            <Link href='/therapist'>
                <Button
                    content='Get started'
                    textTransform='uppercase'
                    filled='true'
                    size='large'
                    fontSize='text-lg md:text-xl lg:text-2xl'
                    radius='md'
                />
            </Link>
        </div>
    );
}
export default withTranslation("requirements")(RequirementsSection);
