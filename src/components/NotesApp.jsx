import React from "react";
import Navigation from "./Navigation";
import { Route, Routes } from "react-router-dom";
import NoteDetail from "../pages/NoteDetail";
import AddNote from "../pages/AddNote";
import NoteListPage from "../pages/NoteListPage";

const NotesApp = () => {
  return (
    <div className="note-app">
      <header className="note-app__header">
        <h1>Notes App</h1>
        <Navigation />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<NoteListPage activeNote={true} />} />
          <Route path="archived" element={<NoteListPage activeNote={false} />} />
          <Route path="note/:noteId" element={<NoteDetail />} />
          <Route path="notes/add" element={<AddNote />} />
        </Routes>
      </main>
    </div>
  );
};

export default NotesApp;
