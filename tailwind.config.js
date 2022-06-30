/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary": "#46542F",
                "secondary": "#4C1C00",
                "accent": "#FFE74C",
                "ghost-white": "#FAFAFF",
                "jet-grey": "#343434",
            },
            fontFamily: {
                "title": "'Concert One', cursive"
            }
        },
    },
    plugins: [],
};
