import React from "react";
import { useSearchParams } from "react-router-dom";
import { getActiveNotes, getArchivedNotes } from "../utils/local-data";
import NoteList from "../components/NoteList";
import PropTypes from "prop-types";

const NoteListPage = ({activeNote}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  const getListOfNotesFunction =  activeNote ? getActiveNotes() :   getArchivedNotes();
  const filteredNotes = getListOfNotesFunction.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  const onSearchChangeEventHandler = (event) => {
    setSearchParams({ search: event.target.value });
  };

  return (
    <section>
      <h2>Note Lists</h2>
      <input
        type="text"
        className="note-input__search"
        placeholder="Cari Catatan"
        value={search}
        onChange={onSearchChangeEventHandler}
      />
      <NoteList notes={filteredNotes} />
    </section>
  );
};

NoteListPage.propTypes = {
  activeNote: PropTypes.bool,
};


export default NoteListPage;

