import {defineConfig} from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './',
  server: {
    allowedHosts: [
      "tunnel.bridgefandom.com",
    ]
  },
});
