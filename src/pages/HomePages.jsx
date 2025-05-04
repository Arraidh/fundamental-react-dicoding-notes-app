import React, { Component } from "react";
import { getAllNotes } from "../utils/local-data";
import NoteList from "../components/NoteList";

class HomePages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getAllNotes(),
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

export default HomePages;
