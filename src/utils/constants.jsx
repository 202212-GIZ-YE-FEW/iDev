export const navigation = [
    { name: "home", href: "/" },
    { name: "blogs", href: "blogs" },
    {
        name: "about",
        href: "#",
        links: [
            { name: "team", href: "/team" },
            { name: "about", href: "/about" },
            { name: "careers", href: "careers" },
        ],
    },
    { name: "contactUs", href: "/contact-us" },
];

export const authenticatedDropdown = [
    { name: "profile", href: "/editprofile" },
    { name: "chats", href: "/chats" },
    { name: "cards", href: "/payment-methods" },
    { name: "logout", href: "/payment-methods" },
];

export const langs = [
    { name: "English", locale: "en", dir: "ltr" },
    { name: "العربية", locale: "ar", dir: "rtl" },
];
