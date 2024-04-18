export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'test',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/style/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/gsap-scrolltrigger.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/auth-next'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  auth: {
    debug: true,
    strategies: {
      freee: {
        scheme: 'oauth2',
        endpoints: {
          authorization: 'https://accounts.secure.freee.co.jp/public_api/authorize',
          token: 'https://accounts.secure.freee.co.jp/public_api/token',
          userInfo: 'https://api.freee.co.jp/api/1/companies',
          logout: 'http://localhost:3000/page2'
        },
        token: {
          property: 'access_token',
          type: 'Bearer',
          maxAge: 1800
        },
        responseType: 'code',
        grantType: 'authorization_code',
        clientId: '171727b5518a0d17d6a2fc1ed60e6e28aba07a677696226e52b1d05eda920125',
        clientSecret: '52b2928e2151fe15cfd4f0c159ff736bc6153c5c98a0e97acc4dbc930e5ab267', 
        scope: ['read write'],
        redirectUri: 'http://localhost:3000/page2'
      }
    }
  }
}
