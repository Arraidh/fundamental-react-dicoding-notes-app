import PropTypes from "prop-types";
import React from "react";

const NoteItemDate = ({ dateContent }) => {
  return <div>{dateContent}</div>;
};

NoteItemDate.propTypes = {
  dateContent: PropTypes.string,
};

export default NoteItemDate;
