/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

module.exports = {
    i18n: {
        locales: ["en", "ar"],
        defaultLocale: "ar",
        localeDetection: true,
    },
    eslint: {
        dirs: ["src"],
    },
    reactStrictMode: true,
    //to make Image from google account works
    images: {
        domains: ["lh3.googleusercontent.com"],
    },
};
