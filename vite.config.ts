import { readFileSync } from "node:fs";
import path from "node:path";

import react from "@vitejs/plugin-react-swc";
import linaria from "@wyw-in-js/vite";
import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

const packageJson = JSON.parse(readFileSync("package.json", "utf8"));

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      inject: {
        data: {
          version: packageJson.version,
        },
      },
    }),
    linaria({
      include: ["**/styles.ts"],
      babelOptions: {
        presets: ["@babel/preset-typescript", "@babel/preset-react"],
      },
      classNameSlug: (hash, title, args) => `${args.dir}-${title}-${hash}`,
    }),
    react(),
  ],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
