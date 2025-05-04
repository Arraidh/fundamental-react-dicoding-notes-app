import React from "react";
import Navigation from "./Navigation";
import { Route, Routes } from "react-router-dom";
import HomePages from "../pages/HomePages";

const NotesApp = () => {
  return (
    <div className="notes-app">
      <header>
        <h1>Notes App</h1>
        <Navigation />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePages />} />
        </Routes>
      </main>
    </div>
  );
};

export default NotesApp;
