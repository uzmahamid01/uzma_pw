

import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import ProjectDetails from "./components/ProjectDetails";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
    </Routes>
  </BrowserRouter>
);
  