import React from "react";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/local-data";
import { showFormattedDate } from "../utils";

const NoteDetail = () => {
  const { noteId } = useParams();

  const { body, createdAt, title } = getNote(noteId);

  return (
    <div>
      <span className="note-item__date">{showFormattedDate(createdAt)}</span>
      <h1>{title}</h1>
      <div>{body}</div>
    </div>
  );
};

export default NoteDetail;
