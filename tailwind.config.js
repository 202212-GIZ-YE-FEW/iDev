/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/pages/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
    purge: ["./src/pages/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
    darkMode: false, // or 'media' or 'class'
    variants: {
        extend: {},
    },
    plugins: [],
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
        '2xl': '1536px',
      },
      colors: {
        'cyan': '#2DD3E3',
        'light-cyan': '#EAF8F9',
        'yellow': '#FEE89E',
        'black': '#000',
        'light-black': '#1A1A1A',
        'gray': '#424A4F',
        'light-gray': '#718096',
        'phosphorescent': '#6BD24D',
        'background': '#E5E5E5',
      },
      fontFamily: {
        sans: ['Poppins', 'Graphik', 'sans-serif'],
      },
      fontSize: {
        'xl': ['1.25rem', { // 20px
          // letterSpacing: '-0.02em',
          lineHeight: '30px',
        }],
        '2xl': ['1.5rem', {// 24px
          lineHeight: '36px',
        }],
        '3xl': ['2.5rem', { // 36px
          lineHeight: '40px',
        }],
        '5xl': ['3.1rem', {// 50px
          lineHeight: '75px',
        }],
        '9xl': ['8rem', {// 128px
          lineHeight: '192px',
        }],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
      },
      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          'sm': '2px',
          'md': '6px',
          'lg': '10px',
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
      }
    }
};
