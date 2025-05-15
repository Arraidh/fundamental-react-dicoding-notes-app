import React from "react";
import { useSearchParams } from "react-router-dom";
import { getActiveNotes } from "../utils/local-data";
import NoteList from "../components/NoteList";

const HomePages = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const filteredNotes = getActiveNotes().filter((note) =>
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
        placeholder="Cari Catatan"
        value={search}
        onChange={onSearchChangeEventHandler}
      />
      <NoteList notes={filteredNotes} />
    </section>
  );
};

export default HomePages;

