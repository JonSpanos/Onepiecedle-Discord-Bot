import {defineConfig} from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        tos: 'tos.html',
        privacy_policy: 'privacy-policy.html'
      }
    },
  },
  envDir: './',
  server: {
    allowedHosts: [
      "tunnel.bridgefandom.com",
    ]
  },
});
