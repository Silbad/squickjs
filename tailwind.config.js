/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
    safelist: [
        {
            pattern: /ring-+/,
            variants: ['focus'],
        },
        {
            pattern: /border-+/,
            variants: ['focus'],
        },
        {
            pattern: /w-+/
        },
        {
            pattern: /rounded-+/
        },
    ],
}

