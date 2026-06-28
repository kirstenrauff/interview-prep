import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const apiProxyTarget = env.API_HOST || 'http://localhost:4200'
  const previewPort = Number(process.env.PORT) || 4202

  return {
    plugins: [react()],
    define: {
      API_HOST: JSON.stringify(env.API_HOST || '')
    },
    server: {
      port: 4201,
      strictPort: true,
      proxy: {
        '/api': apiProxyTarget
      }
    },
  }
})
