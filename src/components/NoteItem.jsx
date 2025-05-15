import React from "react";
import NoteItemDate from "./NoteItemDate";
import NoteItemTitle from "./NoteItemTitle";
import NoteItemBody from "./NoteItemBody";
import PropTypes from "prop-types";


const NoteItem = ({ id, title, body, createdAt,  }) => {
  return (
    <div className="note-item">
      <NoteItemDate dateContent={createdAt} />
      <NoteItemTitle titleContent={title} id={id} />
      <NoteItemBody bodyContent={body} />
    </div>
  );
};

NoteItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  createdAt: PropTypes.string,
};

export default NoteItem;
