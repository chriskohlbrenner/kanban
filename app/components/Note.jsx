import React from 'react';

export default class Note extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };
    this.renderEdit = this.renderEdit.bind(this);
    this.renderTask = this.renderTask.bind(this);
    // this.checkEnter = this.checkEnter.bind(this);
    this.finishEdit = this.finishEdit.bind(this);
  }

  render() {
    const editing = this.state.editing;

    return (
      <div>
        {editing ? this.renderEdit(): this.renderTask()}
      </div>
    );
  }

  renderEdit() {
    return (
      <input type="text"
             autofocus={true}
             defaultValue={this.props.task}
             onBlur={this.finishEdit}
             autofocus={this.checkEnter} />
    );
  }

  renderTask() {
    const onDelete = this.props.onDelete;

    return (
      <div onClick={this.edit.bind(this)}>
        <span className="task">{this.props.task}</span>
        {onDelete ? this.renderDelete() : null }
      </div>
    );
  }

  renderDelete() {
    return <button className="delete" onClick={this.props.onDelete.bind(this)}>x</button>;
  }

  edit() {
    this.setState({
      editing: true
    });
  }

  checkEnter(e) {
    if(e.key === 'Enter') {
      this.finishEdit(e);
    }
  }

  finishEdit(e) {
    this.props.onEdit(e.target.value);
    this.setState({
      editing: false
    });
  }
}