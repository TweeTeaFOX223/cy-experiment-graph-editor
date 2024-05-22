import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

export default defineConfig({
  build: {
    outDir: outDir,
    emptyOutDir: true,
  },
  root,
  base: process.env.GITHUB_PAGES ? "REPOSITORY_NAME" : "./",
});
