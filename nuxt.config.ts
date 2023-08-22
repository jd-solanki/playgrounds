import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  // Enable takeover mode for better DX
  typescript: { shim: false },

  // we have to transpile vuetify
  build: { transpile: ['vuetify'] },

  // disable sourcemap so the terminal warnings go away
  sourcemap: {
    client: false,
    server: false,
  },

  // import styles
  css: ['vuetify/styles'],
  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config =>
        config.plugins.push(
          vuetify({
            styles: { configFile: 'assets/styles.scss' },
          }),
        ),
      )
    },
  ],
})