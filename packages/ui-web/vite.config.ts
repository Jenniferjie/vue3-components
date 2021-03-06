import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx({
    // options are passed on to @vue/babel-plugin-jsx
  })],
  server: {
    port: 8000,
  },
  resolve: {
    // 处理监听组件库打包文件
    alias: {
      'ui-component': 'ui-component/index.ts'
    }
  }
})
