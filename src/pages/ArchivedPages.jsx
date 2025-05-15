import React, { Component } from "react";
import {  getArchivedNotes,  } from "../utils/local-data";
import NoteList from "../components/NoteList";

class ArchivedPages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getArchivedNotes(),
    };
  }
  render() {
    return (
      <section>
        <h2>Note Lists</h2>
        <NoteList notes={this.state.notes} />
      </section>
    );
  }
}

export default ArchivedPages;
