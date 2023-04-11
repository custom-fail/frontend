import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    nitro: {
        routeRules: {
            "/servers/**": { ssr: false },
            "/": { static: true },
            "/support/**": { static: true },
            "/docs": { redirect: "/support" },
            "/documentation": { redirect: "/support" },
        }
    }
})
