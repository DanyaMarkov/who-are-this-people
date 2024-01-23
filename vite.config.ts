import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'host-app',
            remotes: {
              remoteApp: "http://localhost:5001/assets/remoteEntry.js",
            },
            shared: ['react','react-dom'],
          })
    ],
    resolve: {
        alias: {
            '@components': path.resolve('./src/components'),
            '@store': path.resolve('./src/store'),
            '@hooks': path.resolve('./src/hooks'),
            '@img': path.resolve('./src/assets'),
            '@api': path.resolve('./src/api'),
        },
    },
});
