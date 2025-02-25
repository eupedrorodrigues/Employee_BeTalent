import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Employees } from "@/modules/pages";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Employees />
  </StrictMode>
);
