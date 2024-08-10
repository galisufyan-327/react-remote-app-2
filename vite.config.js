import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  envPrefix: "REACT_APP_",
  plugins: [
    react(),

    federation({
      name: "remote",
      filename: "remoteEntry.js",
      remotes: {
        app: "http://localhost:4173//assets/remoteEntry.js", // Adjust URL based on your setup
      },
      exposes: {
        "./remote": "./src/App",
      },
      shared: [
        "react",
        "react-dom",
        "redux",
        "react-redux",
        "react-router-dom",
      ],
    }),
  ],
  build: {
    target: "esnext",
  },
});
