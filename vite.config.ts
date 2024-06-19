import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/fwd-iu-sum24/",
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        comic: resolve(__dirname, "comic.html"),
      },
    },
  },
});
