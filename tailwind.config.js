/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary": "#030027",
                "secondary": "#4C1C00",
                "accent": "#FFE74C",
                "ghost-white": "#FAFAFF",
                "old-grey": "#6B6570",
            },
        },
    },
    plugins: [],
};
