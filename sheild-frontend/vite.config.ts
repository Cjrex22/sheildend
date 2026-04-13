import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg', 'firebase-messaging-sw.js'],
      workbox: {
        navigateFallbackDenylist: [/firebase-messaging-sw\.js/],
        globIgnores: ['firebase-messaging-sw.js']
      },
      manifest: {
        name: 'SHEild - Digital Bodyguard',
        short_name: 'SHEild',
        description: 'Women Safety & Emergency Web App',
        theme_color: '#0F0505',
        background_color: '#0F0505',
        display: 'standalone',
        icons: [
          {
            src: 'sheild-pwa-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'sheild-pwa-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ]
});
