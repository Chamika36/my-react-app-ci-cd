import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Set base path for GitHub Pages deployments
export default defineConfig(({ mode }) => ({
  base: mode === 'qa' ? '/my-react-app-ci-cd-qa/' : '/my-react-app-ci-cd/',
  plugins: [react()],
}));
