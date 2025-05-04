import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";

const NoteList = ({ notes = [], onDelete }) => {
  return notes.map((note) => (
    <NoteItem key={note.id} id={note.id} onDelete={onDelete} {...note} />
  ));
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
};

export default NoteList;
