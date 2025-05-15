import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { archiveNote, deleteNote, getNote, unarchiveNote } from "../utils/local-data";
import { showFormattedDate } from "../utils";
import { MdDelete } from "react-icons/md";
import { FiArchive } from "react-icons/fi";
import { HiArchiveBox, HiMiniArchiveBoxXMark } from "react-icons/hi2";

const NoteDetail = () => {
  const { noteId } = useParams();
  const navigate = useNavigate();

  const { id, body, createdAt, title, archived} = getNote(noteId);

  const handleDeleteNote = () => {

    deleteNote(id);
    navigate("/");

  };
  const handleArchiveNote = () => {

    archiveNote(id);
    navigate("/");

  };
  const handleUnarchiveNote = () => {

    unarchiveNote(id);
    navigate("/");

  };

  return (
    <div className="note-detail">
      <span className="note-item__date">{showFormattedDate(createdAt)}</span>
      <h1>{title}</h1>
      <div>{body}</div>

      <div className="note-delete-container">
          <div className="note-detail-actions">
            

            {
              archived ? (
                <button className="delete-note-button" onClick={() => handleUnarchiveNote()}>
                  <HiMiniArchiveBoxXMark/>
                </button>
              ) : (
                <button className="delete-note-button" onClick={() => handleArchiveNote()}>
                  <HiArchiveBox/>
                </button>
              )
            }
   
            <button className="delete-note-button" onClick={() => handleDeleteNote()}><MdDelete/></button>
          </div>
      </div>
    </div>
  );
};

export default NoteDetail;
