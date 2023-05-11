// for Navbar
export const navigation = [
    { name: "home", href: "/" },
    {
        name: "about",
        href: "#",
        links: [
            { name: "team", href: "/team" },
            { name: "about", href: "/about" },
            { name: "therapists", href: "/therapists" },
        ],
    },
    { name: "blogs", href: "/blogs" },
    { name: "careers", href: "/careers" },
    { name: "contactUs", href: "/contact-us" },
];

export const authenticatedDropdown = [
    { name: "profile", href: "/editprofile" },
    { name: "chatbox", href: "/chats" },
    { name: "paymentCards", href: "/payment-methods" },
    { name: "logout", href: "" },
];

export const langs = [
    { name: "English", locale: "en", dir: "ltr" },
    { name: "العربية", locale: "ar", dir: "rtl" },
];
