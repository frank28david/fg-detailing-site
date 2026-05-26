import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

// Vercel SSR deployment for TanStack Start.
// The `target: "vercel"` option produces a .vercel/output build that Vercel
// auto-detects and serves as a serverless SSR app — no extra adapter needed.
export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    tanstackStart({ target: "vercel" }),
    viteReact(),
  ],
  server: {
    host: "::",
    port: 8080,
  },
});
