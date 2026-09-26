import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    three: ['three'],
                    vendor: ['react', 'react-dom', 'lucide-react'],
                },
            },
        },
    },
    server: {
        port: 3000,
        open: false,
    },
});
