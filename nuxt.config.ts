// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Include Tailwind CSS
  css: ['@/assets/css/tailwind.css'],

  // PostCSS configuration with Tailwind and Autoprefixer
  postcss: {
    plugins: {
      tailwindcss: {}, // TailwindCSS plugin
      autoprefixer: {}, // Autoprefixer plugin
    },
  },

  // Compatibility date (this is fine as is)
  compatibilityDate: '2024-04-03',

  // Enable developer tools
  devtools: { enabled: true },

  // Nuxt modules
  modules: [
    '@nuxt/image', // Image optimization and handling
  ],

  // Configure the @nuxt/image module
  image: {
    // Enable static provider for local image serving (images from the static/ folder)
    providers: {
      static: {
        provider: 'static',
        options: {},
      },
    },
    // Default options for Nuxt image module (optional)
    staticFilename: '[publicPath]/images/[name][ext]',  // To serve images from /static/images
    domains: [], // List of external domains for external images
    screens: {
      // Define image sizes for responsive loading
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
})
