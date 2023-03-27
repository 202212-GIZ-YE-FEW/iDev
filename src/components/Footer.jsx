import Link from "next/link";

import { navigation } from "@/constants";
export default function Footer() {
    return (
        <>
            <div className='flex flex-col md:flex-row'>
                <div>subscribe</div>
                <nav>
                    <ul className='flex'>
                        {navigation.map((nav) => {
                            return (
                                <li key={nav.name}>
                                    <Link href={nav.href}>{nav.name}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </>
    );
}
