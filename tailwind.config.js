/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary": {
                    "100": "#6200ff",
                    "200": "#490979"
                }
            },
            fontFamily: {
                "title": "'Concert One', cursive"
            },
            screens: {
                "2xl": "1370px",
                // => @media (min-width: 1375px) { ... }
                
                "3xl": "1690px",
                // => @media (min-width: 1690px) { ... }
            },
        },
    },
    plugins: [],
};
