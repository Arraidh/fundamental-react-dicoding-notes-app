import React from "react";
import { addNote } from "../utils/local-data";
import NoteInput from "../components/NoteInput";
import { useNavigate } from "react-router-dom";

const AddNote = () => {
  const navigate = useNavigate();

  const onAddNoteHandler = ({ title, body }) => {
    console.log(title, body);
    addNote({ title, body });
    navigate("/");
  };

  return (
    <h1>
      Tambah Catatan
      <NoteInput addNote={onAddNoteHandler} />
    </h1>
  );
};

export default AddNote;
