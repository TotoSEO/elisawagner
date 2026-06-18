import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base est défini sur le nom du dépôt pour un déploiement GitHub Pages
// (https://<user>.github.io/elisawagner/). À adapter si le nom du dépôt change.
export default defineConfig({
  plugins: [react()],
  base: '/elisawagner/',
})
