import {defineConfig} from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                assetFileNames: "[name]-[hash][extname]",
                chunkFileNames: "[name]-[hash].js",
                entryFileNames: "[name]-[hash].js"
            }
        }
    }
});