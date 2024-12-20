const path = require('path');
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/sominoleksandr.github.io/',
  resolve: {
    alias: [
        {find: "@", replacement: path.resolve(__dirname, 'src')}
    ],
  },
})
