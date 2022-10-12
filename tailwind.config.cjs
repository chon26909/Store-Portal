/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
        fontFamily: {
            prompt: ['Prompt', 'Helvetica', 'arial', 'sans-serif'],
            thonburi: ['Thonburi', 'Helvetica', 'arial', 'sans-serif']
        },
        colors: {
            white: 'var(--white)',
            primary: 'var(--primary-color)',
            red: 'var(--red-primary)',
            green: 'var(--green-primary)',
            grey: 'var(--gray-lighter)',
            grey_text: "var(--gray-text)",
            tranperent: "rgba(0,0,0,0)",
            black: "rgb(0,0,0)"
        },
        screens: {
            '2xl': { max: '1535px' },
            xl: { max: '1279px' },
            lg: { max: '1023px' },
            md: { max: '767px' },
            sm: { max: '639px' }
        }
    },
    plugins: []
};
