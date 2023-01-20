// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/color-mode'],
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    app: {
      head: {
        charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'Benson Arafat',
      meta: [
        { name: 'description', content: 'Benson Arafat Full stack developer' }
      ],
      }
    },
})
