import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 处理监听组件库打包文件
    alias: {
      'ui-component': 'ui-component/index.ts'
    }
  }
})
