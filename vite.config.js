// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Si votre index.html n'est pas à la racine, spécifiez son emplacement
  // root: '.', (par défaut, c'est la racine du projet)
  // server: {
  //   port: 3000 // Optionnel : pour spécifier un port différent
  // }
});