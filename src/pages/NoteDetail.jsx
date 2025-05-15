import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteNote, getNote } from "../utils/local-data";
import { showFormattedDate } from "../utils";
import { MdDelete } from "react-icons/md";

const NoteDetail = () => {
  const { noteId } = useParams();
  const navigate = useNavigate();

  const { id, body, createdAt, title } = getNote(noteId);

  const handleDeleteNote = () => {

    deleteNote(id);
    navigate("/");

  };

  return (
    <div className="note-detail">
      <span className="note-item__date">{showFormattedDate(createdAt)}</span>
      <h1>{title}</h1>
      <div>{body}</div>

      <div className="note-delete-container">
            <button className="delete-note-button" onClick={() => handleDeleteNote()}><MdDelete/></button>
      </div>
    </div>
  );
};

export default NoteDetail;
