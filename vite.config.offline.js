//インライン化されたhtmlをビルドするための設定ファイル
import { resolve } from "path";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist-offline");

export default defineConfig({
  build: {
    outDir: outDir,
    emptyOutDir: true,
  },

  plugins: [viteSingleFile()], // This is the plugin 😃
  root,
  base: process.env.GITHUB_PAGES ? "REPOSITORY_NAME" : "./",
});
