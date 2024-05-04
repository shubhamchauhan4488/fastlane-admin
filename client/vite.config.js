import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     '/items': {
  //       // target: process.env.VITE_BASE_URL,
  //       target: 'https://effective-space-pancake-r7jqqgxj667hx695-3000.app.github.dev',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/items/, '/v1/api/items'),
  //     },
  //   },
  // },
})
