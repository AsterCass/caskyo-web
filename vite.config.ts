import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import {quasar, transformAssetUrls} from '@quasar/vite-plugin'
import {compression} from 'vite-plugin-compression2'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue({
      template: {transformAssetUrls}
    }),
    quasar({
      sassVariables: fileURLToPath(
        new URL('./src/styles/quasar-variables.sass', import.meta.url)
      )
    }),
    vueJsx(),
    // vueDevTools(), //页面下方的开发工具 import vueDevTools from 'vite-plugin-vue-devtools'
    compression(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
