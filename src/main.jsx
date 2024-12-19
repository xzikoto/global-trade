import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n/config";
import "./index.css";
import App from "./App.jsx";

// ...existing code...

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);