/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontSize: {
                sm: '0.800rem',
                base: '1rem',
                xl: '1.250rem',
                '2xl': '1.563rem',
                '3xl': '1.954rem',
                '4xl': '2.442rem',
                '5xl': '3.053rem',
            },
            fontFamily: {
                heading: 'Montserrat Alternates',
                body: 'Montserrat',
            },
            fontWeight: {
                normal: '400',
                bold: '700',
            },
            colors: {
                'text': '#333333',
                'background': '#F2F2F2',
                'primary': '#799693',
                'secondary': '#a298ae',
                'accent': '#a5d5d3',
            },
        },
    },
    plugins: [],
}