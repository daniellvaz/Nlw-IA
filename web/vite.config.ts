import dotenv from 'dotenv'
import path from "path"
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})


