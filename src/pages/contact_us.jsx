// import Image from "next/image";
import { collection, getDocs } from "firebase/firestore";
import { withTranslation } from "next-i18next";

// import Button from "@/components/ui/Button";
// import Textarea from "@/components/ui/textarea/Textarea";
// import RadioGroup from "@/components/ui/radiogroup/RadioGroup";
// import Input from "@/components/ui/Input";
// import Link from "next/link";
// import AuthSocialMedia from "@/components/AuthSocialMedia";
import PageIntro from "@/components/PageIntro";
import RadioGroup from "@/components/ui/radiogroup/RadioGroup";
import RadioInputItem from "@/components/ui/radiogroup/RadioInputItem";

import { db } from "@/firebase-config/firebase";
function ContactUs({ t, choices }) {
    //  const choices = [
    //   {name:"service_question", title:"I have a question about the service.", value:"service_question",  checked:false},
    //   {name:"client_support", title:"I'm a registered client and I need support.", value:"client_support", checked:true},
    //   {name:"counselor", title:"I'm a counselor interested in joining.", value:"counselor", checked:false},
    //   {name:"counselor_support", title:"I'm a registered counselor and I need support.", value:"counselor_support", checked:false},
    //   {name:"business_inquiry", title:"I have a business-related inquiry.", value:"counselor_support", checked:false},
    //   {name:"healing_online", title:"I'm interested in Healing Online for my organization.", value:"healing_online", checked:false},
    //   {name:"billing_question", title:"I have a billing related question.", value:"billing_question", checked:false},
    //  ];
    return (
        <>
            <div className='container py-10'>
                <PageIntro
                    title='send us your request'
                    subtitle="Do you have a question, concern, idea, feedback, or problem?  If you need assistance, please fill out the form below and we'd be happy to help!"
                />
                <RadioGroup title='Type of contact'>
                    {choices.map((item, index) => (
                        <RadioInputItem
                            key={index}
                            id={index}
                            name={item.name}
                            value={item.value}
                            title={item.title}
                            checked={item.checked}
                            onChange={null}
                        />
                    ))}
                </RadioGroup>
            </div>
        </>
    );
}

export async function getServerSideProps() {
    const choices = await getDocs(collection(db, "type_of_contact")).then(
        (res) =>
            res.docs.map((data) => {
                return { ...data.data(), id: data.id };
            })
    );
    return {
        props: { choices },
    };
}

// export async function getStaticProps({ locale }) {
//     return {
//         props: {
//             ...(await serverSideTranslations(locale, ["common", "signup"])),
//             // Will be passed to the page component as props
//         },
//     };
// }
export default withTranslation("signup")(ContactUs);
