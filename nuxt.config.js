export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
router:{
  middleware:'siteconfig'
}
,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-storyblok-blog',
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
    '~/plugins/components',
    '~/plugins/composition-api.js',
    '~/plugins/storyblok-rich-text-renderer.js'


  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    [
      "nuxt-fontawesome",
      {
        component: "fa",
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["faInfoCircle"],
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: [
              "faTwitter",
              "faInstagram",
              "faSlack",
              "faYoutube",
              "faGithub",
            ],
          },
        ],
      },
    ],

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
       'storyblok-nuxt',
       {
        accessToken: 'O5rG616az8p2NNQrxHHRlgtt',
         cacheProvider: 'memory'
       }
     ],

  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
