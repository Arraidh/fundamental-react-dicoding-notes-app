import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NoteItemTitle = ({ titleContent, id }) => {
  return (
    <Link to={`/note/${id}`}>
      <h5 className="note-item__title">{titleContent}</h5>
    </Link>
  );
};

NoteItemTitle.propTypes = {
  titleContent: PropTypes.string,
};

export default NoteItemTitle;
