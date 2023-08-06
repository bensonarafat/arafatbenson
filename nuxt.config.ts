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
        script: [
          {
            src: 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js',
            async: true,
            defer: true,
            'data-name': 'BMC-Widget', 
            'data-cfasync': 'false', 
            'data-id': 'bensonarafat', 
            'data-description': 'Support me on Buy me a coffee!', 
            'data-message': '', 
            'data-color': '#5F7FFF', 
            'data-position': 'Right', 
            'data-x_margin': '18', 
            'data-y_margin': '18',
          }

        ],
      },
    },

})
