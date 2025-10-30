import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./responsive.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import IsVisible from "./context/IsVisible.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <IsVisible>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IsVisible>
  </StrictMode>
);
