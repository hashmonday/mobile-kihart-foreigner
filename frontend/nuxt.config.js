export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  server: {
    host: process.env.HOST, // default: localhost
    port: process.env.PORT
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mobile-kihart-foreigner',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-html-to-paper',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://github.com/nuxt-community/apollo-module
    '@nuxtjs/apollo',
    // https://github.com/nuxt-community/dayjs-module
    '@nuxtjs/dayjs'
  ],

  dayjs: {
    locales: ['en', 'th'],
    defaultLocale: 'th',
    defaultTimeZone: 'Asia/Bangkok',
    plugins: [
      'utc', 'timezone', 'RelativeTime', 'BuddhistEra'
    ]
  },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: `http://${process.env.HOST}:1337/graphql`,
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
