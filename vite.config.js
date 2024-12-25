import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  // Use domain link for API_URL
  const API_URL = env.VITE_API_URL || "http://edtech-api.cehpoint.co.in:5000"; // Update if needed

  return {
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      }),
      VitePWA({
        manifest: {
          short_name: "CehpointE-LearningSolutions",
          name: "Ai Course Generator",
          icons: [
            {
              src: "favicon.ico",
              sizes: "64x64 32x32 24x24 16x16",
              type: "image/x-icon",
            },
            {
              src: "logo192.png",
              type: "image/png",
              sizes: "192x192",
            },
            {
              src: "logo512.png",
              type: "image/png",
              sizes: "512x512",
            },
          ],
          start_url: ".",
          display: "standalone",
          theme_color: "#000000",
          background_color: "#ffffff",
        },
        workbox: {
          maximumFileSizeToCacheInBytes: 3 * 1024 * 1024,
        },
      }),
    ],
    server: {
      host: '0.0.0.0', // Allow access from all network interfaces (local testing)
      port: 5173, // Vite default port
      open: false, // Don't auto-open the browser
      hmr: {
        host: 'edtech-api.cehpoint.co.in', // Use your domain for HMR
      },
      watch: {
        usePolling: true, // Useful for environments like Docker
      },
    },
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
    build: {
      chunkSizeWarningLimit: 600,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0];
            }
          },
        },
      },
    },
  };
});
