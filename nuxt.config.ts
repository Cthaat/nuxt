// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify']
  },
  modules: [
    '@nuxt/eslint',
    '@element-plus/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    (_options, nuxt) => { 
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error: Vite config plugins array might be undefined
        config.plugins.push(vuetify({ autoImport: true }));
      });
    }
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls
      }
    }
  }
});
