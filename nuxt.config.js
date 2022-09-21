export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Alamindev Portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'I am a highly proficient Web Developer & got excellent skills in programming, web development, and designing along with Security with 5+ years of tireless involvement in Laravel, ReactJS, VueJs, WordPress, JavaScript. I have a long list of skills and Expertise in my arsenals for reshaping my customer\'s requirements to next-level design and development.' },
      { hid: 'keywords', name: 'keywords', content: 'php, laravel, vuejs, wordpress, reactjs, javascript, api, nuxt js, next js, website development, website creation, frontend development, backend development, mern stack developer, web application developer, javascript developer, react js,  vue js, html, css, bootstrap, tailwindcss' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'reply-to', content: 'mdalamin6554@gmail.com' },
      { hid: 'url',name: 'url', content: 'https://alamindevbd.com/' },
      { hid: 'identifier-URL', name: 'identifier-URL', content: 'https://alamindevbd.com/' },
      { hid: 'pagename', name: 'pagename', content: 'Portfolio website, php developer, laravel developer' },
      { hid: 'category', name: 'category', content: 'web design, web development' },
      { hid: 'robots', name: 'robots', content: 'index,follow' },
      { hid: 'copyright', name: 'copyright', content: 'alamindev' },
      { hid: 'subject', name: 'subject', content: 'Portfolio Website' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
     link: [{
                rel: "apple-touch-icon",
                href: "/apple-touch-icon.png",
                sizes: "76x76"
            },
            {
                rel: "icon",
                type: "image/png",
                href: "/favicon-32x32.png",
                sizes: "32x32"
            },
            {
                rel: "icon",
                type: "image/png",
                href: "/favicon-16x16.png",
                sizes: "16x16"
            },
            {
                rel: "mask-icon",
                href: "/safari-pinned-tab.svg",
                color: "#5bbad5"
            }
        ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/reset.css',
    '~/assets/css/bootstrap-grid.min.css',
    '~/assets/css/main.css',
    'swiper/css/swiper.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
        '~/plugins/typed.js',
        '~/plugins/particles.js',
        '~/plugins/perfect-scroll.js',
        '~/plugins/vue-awesome-swiper.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  '@nuxtjs/pwa',
  ],
  pwa: {
     icon: {
      fileName: 'icon.png',
  } ,
    meta: {
      title: 'Alamindev',
      author: 'Me',
    },
    manifest: {
      name: 'Alamin Deveoper',
      short_name: 'Portfolio website',
      lang: 'en',
      orientation: 'portrait-primary',
      background_color: '#ffffff',
      theme_color: '#010101',
    },
    workbox: {
      dev: process.env.NODE_ENV !== 'production'
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap',
    ['nuxt-lazy-load', {
      defaultImage: '/loading.gif',
      directiveOnly: true,
    }],

  ],
 sitemap: {
    hostname: 'https://alamindevbd.com',
    lastmod: '2022-02-01',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
