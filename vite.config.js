import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    root: "src",
    assetsInclude: "**/*.JPG",
    build: {
        outDir: '../dist'
    }
});