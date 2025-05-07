import PropTypes from "prop-types";
import React from "react";

const NoteItemBody = ({ bodyContent }) => {
  return <p className="note-item__body">{bodyContent}</p>;
};

NoteItemBody.propTypes = {
  bodyContent: PropTypes.string,
};

export default NoteItemBody;
