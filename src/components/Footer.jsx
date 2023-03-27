import Link from "next/link";

import { navigation } from "@/constants";
export default function Footer() {
    return (
        <>
            <footer className='bg-yellow py-8'>
                <div className='container flex flex-col md:flex-row justify-center md:justify-between'>
                    <div>subscribe</div>
                    <nav className=''>
                        <ul className='flex text-light-gray'>
                            {navigation.map((nav) => {
                                return (
                                    <li key={nav.name} className='mx-6'>
                                        <Link href={nav.href}>{nav.name}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </footer>
        </>
    );
}
