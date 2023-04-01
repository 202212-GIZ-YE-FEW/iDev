/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/pages/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
    purge: ["./src/pages/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
    darkMode: false, // or 'media' or 'class'
    variants: {
        extend: {},
    },
    plugins: [require("tailwindcss-rtl")],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
            "2xl": "1536px",
        },
        container: {
            padding: {
                DEFAULT: ".5rem",
                sm: "1rem",
                md: "1.5rem",
                lg: "3rem",
                xl: "4rem",
                "2xl": "9rem",
            },
            center: true,
        },
        colors: {
            cyan: "#2DD3E3",
            "light-cyan": "#EAF8F9",
            yellow: "#FEE89E",
            black: "#000",
            "light-black": "#1A1A1A",
            gray: "#424A4F",
            "light-gray": "#718096",
            phosphorescent: "#6BD24D",
            background: "#E5E5E5",
            white: "#FFF",
            "light-white": "#FBFBFB",
            transparent: "transparent",
        },
        fontFamily: {
            sans: ["Poppins", "Graphik", "sans-serif"],
        },
        fontSize: {
            sm: [
                "0.875rem", // 14px
                {
                    lineHeight: "21px",
                },
            ],
            base: [
                "1rem", // 16px
                {
                    lineHeight: "24px",
                },
            ],
            lg: [
                "1.125rem", // 18px
                {
                    lineHeight: "27px",
                },
            ],
            xl: [
                "1.25rem", // 20px
                {
                    lineHeight: "30px",
                },
            ],
            "2xl": [
                "1.5rem", // 24px
                {
                    lineHeight: "36px",
                },
            ],
            "3xl": [
                "1.875rem", // 30px
                {
                    lineHeight: "38px",
                },
            ],
            "4xl": [
                "2.25rem", // 36px
                {
                    lineHeight: "40px",
                },
            ],
            "5xl": [
                "3.1rem", // 50px
                {
                    lineHeight: "75px",
                },
            ],
            "9xl": [
                "8rem", // 128px
                {
                    lineHeight: "192px",
                },
            ],
        },
        fontWeight: {
            light: "300",
            normal: "400",
            medium: "500",
            semibold: "600",
        },
        extend: {
            boxShadow: {
                md: "0 4px 6px -1px rgb(0 0 0 / 0.15), 0 2px 4px -2px rgb(0 0 0 / 0.15)",
                "2xl": "0 20px 25px -5px rgb(0 0 0 / 0.2), 0 8px 10px -6px rgb(0 0 0 / 0.2)",
            },
            // spacing: {
            //     128: "32rem",
            //     144: "36rem",
            // },
            borderRadius: {
                sm: "2px",
                md: "5px",
                lg: "10px",
                "2xl": "16px",
                "3xl": "25px",
            },
            // paddingBlock: {
            //   'sm': '4.7px',
            //   'lg': '12px',
            // },
            // paddingInline: {
            //   'sm': '6px',
            //   'md': '28px',
            //   'lg': '48px',
            // }
        },
    },
};
