import React from "react";
import { createRoot } from "react-dom/client";

import "./styles/style.css";
import { BrowserRouter } from "react-router-dom";
import NotesApp from "./components/NotesApp";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <NotesApp />
  </BrowserRouter>
);
