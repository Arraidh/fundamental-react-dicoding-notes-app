import React from "react";
import NoteItemDate from "./NoteItemDate";
import NoteItemTitle from "./NoteItemTitle";
import NoteItemBody from "./NoteItemBody";
import PropTypes from "prop-types";

// TODO setup archived note functionality

const NoteItem = ({ title, body, createdAt, archived }) => {
  console.log(title);
  return (
    <div>
      <NoteItemDate dateContent={createdAt} />
      <NoteItemTitle titleContent={title} />
      <NoteItemBody bodyContent={body} />
    </div>
  );
};

NoteItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  createdAt: PropTypes.string,
  archived: PropTypes.bool,
};

export default NoteItem;
