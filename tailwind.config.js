/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontSize: {
                sm: '0.800rem', // use for tiny text (DONT USE UNLESS NECESSARY)
                base: '1rem', // use for body text (paragraphs, etc.)
                xl: '1.250rem', // use for subheadings (if a subheading is needed)
                '2xl': '1.563rem', // use for headings 
                '3xl': '1.954rem', // use for titles only!!!
                '4xl': '2.442rem', // DONT USE UNLESS NECESSARY
                '5xl': '3.053rem', // DONT USE UNLESS NECESSARY
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
                'background-main': '#F2F2F2',
				'background-dark': '#EAEAEA',
                'primary': '#799693',
                'secondary': '#a298ae',
                'accent': '#a5d5d3',
            },
        },
    },
    plugins: [],
}