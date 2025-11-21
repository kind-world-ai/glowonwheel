/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                olive: {
                    DEFAULT: '#4B5E23',
                    light: '#6B8E23',
                    dark: '#3A4A1A',
                },
                mustard: {
                    DEFAULT: '#F0C441',
                    bright: '#FFD700',
                },
                cream: {
                    DEFAULT: '#F9F7F0',
                }
            }
        },
    },
    plugins: [],
}
