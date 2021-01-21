import serveStatic from 'serve-static'
export default {
  //  server: {
  //    port: 80, // default: 3000
  //     host: '185.51.246.40' // default: localhost
  //   },
  // env: {
  //       ws_url: 'ws://185.51.246.40:8000',
  //       img_url: 'http://185.51.246.40:8000',
  //
  //   },
  serverMiddleware: [
    // '~/middleware/seo.js'
  ],
  env: {
    ws_url: 'ws://localhost:8000',
    img_url: 'http://localhost:8000',

  },
  head: {
    title: 'pizza_front',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect',  href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@900&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat&display=swap' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/main.sass',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/vuesax',
    '@/plugins/scroll',
    '@/plugins/mask',
    { src: '@/plugins/swiper', mode: 'client' },
    {src:'@/plugins/ymapPlugin',mode: 'client'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // '@nuxtjs/auth',
    'nuxt-lazy-load'
  ],
  router: {
    // middleware: ['auth']
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL:'http://localhost:8000'
    // baseURL:'http://185.51.246.40:8000'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },
  // auth: {
  //   redirect: {
  //     login: '/',
  //     logout: '/',
  //     callback: '/',
  //     home: '/'
  //   },
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: { url: '/auth/token/login/', method: 'post', propertyName: 'auth_token' },
  //         logout: { url: '/auth/token/logout/', method: 'post' },
  //         user: { url: '/api/v1/user/me/', method: 'get', propertyName: false }
  //       },
  //       // tokenRequired: true,
  //       tokenType: 'Token',
  //       // globalToken: true,
  //       //autoFetchUser: false
  //     }
  //   }
  // }
}
