import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ResearchGroup } from "./components/ResearchGroup.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ResearchGroup />
  </StrictMode>
);
