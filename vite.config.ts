import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import linaria from "@wyw-in-js/vite";

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
  ],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
