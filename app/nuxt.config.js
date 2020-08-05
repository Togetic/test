export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    noscript: [ { innerHTML: 'This website requires JavaScript.' } ],
    htmlAttrs: {
      lang: 'en-us',
    },
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8', 'http-equiv': 'content-type', content: 'text/html' },
      {
        name: 'viewport',
        content: 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0'
      },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#0a0',
    failedColor: '#a00',
    height: '5px'
  },
  env: {
    baseUrl: process.env.BASE_URL,
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/globalMethods',
    '@/plugins/icons',
    '@/plugins/applyAxios',
    '@/plugins/axiosConfig',
    { src: '@/plugins/vuex-persist', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
  ],
  vuetify: {
    /* module options */
    options: {
      customProperties: true
    },
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/moment',
    'cookie-universal-nuxt',
    '@nuxtjs/device',
    [ 'nuxt-validate', {
      lang: 'en',
    } ],
    '@nuxtjs/style-resources',
    '@bazzite/nuxt-optimized-images',
    'nuxt-webfontloader',
  ],
  // https://github.com/bazzite/nuxt-optimized-images
  optimizedImages: {
    //use installed modules automatically
    optimizeImages: true
  },
  styleResources: {
    // your settings here
    scss: [ '~/assets/css/libs/variables.scss', '~/assets/css/libs/_include-media.scss' ],
  },
  css: [
    '@/assets/css/style.scss'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.BASE_URL,
  },
  webfontloader: {
    google: {
      families: [ 'Open+Sans:300,400,400i,600,700' ]
    }
  },
  router: {
    middleware: [
      // 'loggedIn'
    ],
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    // publicPath: process.env.CDN_URL,
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      extractCSS: true,
      splitChunks: {
        chunks: 'all',
      },
      sourceMap: process.NODE_ENV !== 'production',
      cssSourceMap: process.NODE_ENV !== 'production',
      removeAvailableModules: true,
      mergeDuplicateChunks: true,
      transpile: [/^vuetify/],
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-nested': {},
        'postcss-responsive-type': {},
        'postcss-hexrgba': {},
        'postcss-url': false,
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true
        }
      }
    },
    babel: {
      plugins: [ 'transform-class-properties' ]
    },
    extend (config, ctx) {

    }
  }
}
