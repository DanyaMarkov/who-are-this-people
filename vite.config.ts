import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
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
