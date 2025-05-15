import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";

const NoteList = ({ notes = [] }) => {
  return (
    <section className="note-list">
      {notes?.length > 0
        ? notes?.map((note) => (
            <NoteItem
              key={note.id}
              id={note.id}
              {...note}
            />
          ))
        : "Tidan ada catatan"}
    </section>
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
};

export default NoteList;
