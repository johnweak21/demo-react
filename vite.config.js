import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  /*server: {
    host: "0.0.0.0", // 绑定到所有网络接口
    port: 3000, // 你可以更改为其他端口
  },*/
});
