import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // Permite que se acepte cualquier host
    allowedHosts: ["localhost", "127.0.0.1", "d452-2-153-227-178.ngrok-free.app"], // Agrega tus hosts permitidos aquí si es necesario
  },
});
