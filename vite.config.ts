import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import CONFIG from './tsconfig.app.json'

const aliasReplace = (path: string) => path.replace('/*', '')

// Tipamos correctamente el objeto alias y usamos el tipo apropiado
const alias: Record<string, string> = {}

// Convertimos Object.keys a un tipo específico
const paths = CONFIG.compilerOptions.paths as Record<string, string[]>

for (const key of Object.keys(paths)) {
  alias[aliasReplace(key)] = resolve(__dirname, aliasReplace(paths[key][0]))
}

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias
  }
})
