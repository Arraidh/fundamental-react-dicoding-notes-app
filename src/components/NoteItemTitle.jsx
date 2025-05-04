import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";

const NoteItemTitle = ({ titleContent }) => {
  return <div>{titleContent}</div>;
};

NoteItemTitle.propTypes = {
  titleContent: PropTypes.string,
};

export default NoteItemTitle;
