import {defineConfig} from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                app: "./index.html",
                worker: "./src/worker.ts"
            },
            output: {
                assetFileNames: "[name]-[hash][extname]",
                chunkFileNames: "[name]-[hash].js",
                entryFileNames: info =>
                    info.name === "worker" ? "worker.js" : "[name]-[hash].js"
            }
        }
    }
});