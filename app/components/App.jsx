import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx';
import AppState from '../State.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = AppState
    this.addNote = this.addNote.bind(this);
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

  editNote(noteId, task) {
    console.log('note edited', noteId, task)
  }
}