import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'person-card-app', // name of the fed group...
            filename: 'remoteEntry.js', // default file name
            // Modules to expose
            exposes: {
                './PersonCard': './src/components/PersonCard/PersonCard.tsx',
                './store': './src/store/store.ts',
            },
            shared: ['react', 'react-dom', 'jotai'], // libs/deps to be shared
        }),
    ],
    build: {
        target: 'esnext', // needed to final build
    },
});
