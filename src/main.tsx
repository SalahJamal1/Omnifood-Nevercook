import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./responsive.css";
const App = lazy(() => import("./App.tsx"));
import { BrowserRouter } from "react-router-dom";
import IsVisible from "./context/IsVisible.tsx";
import Spinner from "./components/Spinner.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<Spinner />}>
      <IsVisible>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </IsVisible>
    </Suspense>
  </StrictMode>
);
