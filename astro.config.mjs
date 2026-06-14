// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Static output -> builds to ./dist, which you upload to IONOS webspace via SFTP.
export default defineConfig({
  site: "https://mie-heesch.de",
  vite: {
    plugins: [tailwindcss()],
  },
});
