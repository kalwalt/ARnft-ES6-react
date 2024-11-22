import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        open: './public/index.html',
    },
    build: {
        outDir: 'build'
    }
});