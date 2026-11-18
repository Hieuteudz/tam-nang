import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';
import { readFileSync } from 'node:fs';

const packageVersion = (JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8')) as { version: string }).version;

export default defineConfig({
  define: { __APP_VERSION__: JSON.stringify(packageVersion) },
  plugins: [react(), tailwindcss(), VitePWA({
    disable: process.env.NODE_ENV === 'development',
    registerType: 'prompt', injectRegister: null,
    includeAssets: ['icon.svg', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png', 'apple-touch-icon-180.png'],
    manifest: {
      name: 'Tam Năng', short_name: 'Tam Năng', lang: 'vi',
      description: 'Chăm sóc năng lượng, thời gian và chi tiêu của bạn.',
      theme_color: '#377968', background_color: '#f6f7f4',
      display: 'standalone', orientation: 'portrait', start_url: '/', scope: '/',
      icons: [
        { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
        { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
        { src: '/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
      ],
    },
    workbox: { globPatterns: ['**/*.{js,css,html,svg,png,woff2}'], cleanupOutdatedCaches: true },
  })],
  server: { host: '127.0.0.1', port: 4173, strictPort: true },
  test: { include: ['src/**/*.test.ts'], environment: 'node' },
  build: { rollupOptions: { output: { onlyExplicitManualChunks: true, manualChunks(id) {
    // Keep React/CommonJS helpers out of charts, otherwise the entry would have
    // to eagerly import Recharts just to obtain a shared React DOM helper.
    if (id.includes('commonjsHelpers')) return 'framework';
    if (!id.includes('/node_modules/')) return;
    if (/\/node_modules\/(react|react-dom|scheduler|use-sync-external-store)\//.test(id)) return 'framework';
    if (/\/node_modules\/(dexie|dexie-react-hooks)\//.test(id)) return 'storage';
    if (/\/node_modules\/recharts\//.test(id)) return 'charts';
  } } } },
});
