import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx';
import AppState from '../State.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = AppState
    this.addNote = this.addNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.findNote = this.findNote.bind(this);
  }

  render() {
    return (
      <div>
        <button className="add-note" onClick={this.addNote}>+</button>
        <Notes items={this.state.notes} onEdit={this.editNote} />
      </div>
    );
  }

  addNote() {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'New'
      }])
    })
  }

  editNote(id, task) {
    const notes = this.state.notes;
    const noteIndex = this.findNote(id);
    if(noteIndex < 0) {
      return;
    }
    notes[noteIndex].task = task;
    debugger
    this.setState({notes: notes});
  }

  findNote(id) {
    const notes = this.state.notes;
    const noteIndex = notes.findIndex((note) => note.id === id);
    if(noteIndex < 0) {
      console.warn('Failed to find note', notes, id);
    }
    return noteIndex;
  }

}