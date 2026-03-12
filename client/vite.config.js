import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { redirect } from "react-router-dom";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss({
      theme: {
        extend: {
          colors: {
            primary: "#2B85FF",
            secondary: "#EF863E",
          },
        },
      },
    }),
    react(),
  ],
});
