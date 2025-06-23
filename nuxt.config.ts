import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from "@tailwindcss/vite";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [],
    css: ['~/assets/css/main.css'],
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
    nitro: {
        routeRules: {
            "/servers/**": { ssr: false },
            "/": { static: true },
            "/support/**": { static: true },
            "/docs": { redirect: "/support" },
            "/documentation": { redirect: "/support" },
        }
    },
    // compatibilityDate: "2025-06-18"
})
