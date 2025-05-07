import React from "react";
import Navigation from "./Navigation";
import { Route, Routes } from "react-router-dom";
import HomePages from "../pages/HomePages";
import NoteDetail from "../pages/NoteDetail";

const NotesApp = () => {
  return (
    <div className="note-app">
      <header className="note-app__header">
        <h1>Notes App</h1>
        <Navigation />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="note/:noteId" element={<NoteDetail />} />
        </Routes>
      </main>
    </div>
  );
};

export default NotesApp;
