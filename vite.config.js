import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  base: '/portfolio-app/', // Important: match your repository name
  plugins: [svelte()],
});