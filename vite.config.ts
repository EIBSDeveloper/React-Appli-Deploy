import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
base: '/',
server: {
host: true,
port: 5184, // Change the development server port
},
preview: {
port: 5183, // Change the preview server port (if you run 'npm run preview')
},
plugins: [
react(), tailwindcss()
],
resolve: {
alias: {
'@': path.resolve(__dirname, './src'),
},
},
});