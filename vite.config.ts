import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import caseSensitivityPlugin from "./case-sensitivity-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), caseSensitivityPlugin()],
});
