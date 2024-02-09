/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                shimmer: {
                    "100%": { transform: "translateX(100%)" },
                },
            },
            animation: {
                shimmer: "shimmer 1.5s infinite",
            },
            screens: {
                "2xl": { max: "1535px" },
                // => @media (max-width: 1535px) { ... }

                xl: { max: "1279px" },
                // => @media (max-width: 1279px) { ... }

                lg: { max: "1023px" },
                // => @media (max-width: 1023px) { ... }

                md: { max: "767px" },
                // => @media (max-width: 767px) { ... }

                sm: { max: "639px" },
                // => @media (max-width: 639px) { ... }
                xs: { max: "450px" },
                xxs: { max: "370px" },
            },
        },
    },
    plugins: [],
};
