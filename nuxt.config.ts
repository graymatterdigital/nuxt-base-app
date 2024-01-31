// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    
    './dx-layer',
    './nuxt-layer',//my-ui-layer
  ],
  /* imports: {
    presets: [
      {
        from: 'qrcode.vue',
        imports: ['QrcodeVue']
      }
    ]
  }, */
  app: {
    // TODO: Customize transistions between pages and layouts
    pageTransition: {
      name: 'fade',
      mode: 'out-in' // default
    },
    layoutTransition: {
      name: 'slide',
      mode: 'out-in' // default
    }
  },
  devtools: { enabled: false },
  modules: [
    //"@nuxtjs/storybook",
    "@nuxt/content",
    "@nuxt/ui",
    "@nuxtjs/color-mode",
    //"@nuxtjs/i18n",
    //"@nuxtjs/seo",
    "@hebilicious/authjs-nuxt",
    "nuxt-lodash",
    "@vueuse/nuxt",
    "@nuxt/image",
  ],
  /* storybook: {
    enabled: false,
    url: 'http://localhost:6006',
    storybookRoute: '/__storybook__',
    port: 6006,
  }, */
  content: { 
    documentDriven: {
      injectPage: false,
    }
  },
  /* i18n: {
    enabled: false,
    baseUrl: 'http://localhost:3000',
    defaultLocale: 'en',
    locales: [
      { code: 'en', iso: 'en-US' },
    ],
  }, */
  runtimeConfig: {
    authJs: {
      secret: process.env.NUXT_NEXTAUTH_SECRET // You can generate one with `openssl rand -base64 32`
    },
    github: {
      clientId: process.env.NUXT_GITHUB_CLIENT_ID,
      clientSecret: process.env.NUXT_GITHUB_CLIENT_SECRET
    },
    public: {
      authJs: {
        baseUrl: process.env.NUXT_NEXTAUTH_URL, // The URL of your deployed app (used for origin Check in production)
        verifyClientOnEveryRequest: false, // whether to hit the /auth/session endpoint on every client request
        guestRedirectTo: "/about", // where to redirect if the user is not authenticated
        authenticatedRedirectTo: "/"
      }
    }
  }
})