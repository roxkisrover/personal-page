import { readFileSync } from "node:fs";
import path from "node:path";

import react from "@vitejs/plugin-react-swc";
import linaria from "@wyw-in-js/vite";
import { defineConfig } from "vite";

const packageJson = JSON.parse(readFileSync("package.json", "utf8"));

export default defineConfig({
  plugins: [
    linaria({
      include: ["**/styles.ts"],
      babelOptions: {
        presets: ["@babel/preset-typescript", "@babel/preset-react"],
      },
      classNameSlug: (hash, title, args) => `${args.dir}-${title}-${hash}`,
    }),
    react(),
    {
      name: "html-transform",
      transformIndexHtml: (html) =>
        html.replace(
          /<title>(.+?)<\/title>/,
          `<title>$1</title>\n    <meta name="version" content="${packageJson.version}" />`
        ),
    },
  ],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
