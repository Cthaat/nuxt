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
    '@vueuse/nuxt',
    '@element-plus/nuxt',
    '@nuxtjs/color-mode',
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
  },
  colorMode: {
    preference: 'dark', // default value of $colorMode.preference
    fallback: 'dark', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },
  nitro: {
    storage: {
      'local': {
        driver: 'fs',
        base: './data'
      }
    },
    experimental: {
      asyncContext: true,
      database: true
    }
  },
  runtimeConfig: {
    // 只有服务器端可用
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME
  }
});
