import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const apiProxyTarget = env.API_HOST || 'http://localhost:4200'

  return {
    plugins: [react()],
    server: {
      port: 4201,
      strictPort: true,
      proxy: {
        '/api': apiProxyTarget
      }
    }
  }
})
