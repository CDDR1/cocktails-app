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
            }
        },
    },
    plugins: [],
};
