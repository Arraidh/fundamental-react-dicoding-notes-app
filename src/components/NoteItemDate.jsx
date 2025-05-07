import PropTypes from "prop-types";
import React from "react";
import { showFormattedDate } from "../utils";

const NoteItemDate = ({ dateContent }) => {
  return (
    <span className="note-item__date">{showFormattedDate(dateContent)}</span>
  );
};

NoteItemDate.propTypes = {
  dateContent: PropTypes.string,
};

export default NoteItemDate;
