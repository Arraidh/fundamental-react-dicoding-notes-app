import PropTypes from "prop-types";
import React from "react";

const NoteItemBody = ({ bodyContent }) => {
  return <div>{bodyContent}</div>;
};

NoteItemBody.propTypes = {
  bodyContent: PropTypes.string,
};

export default NoteItemBody;
