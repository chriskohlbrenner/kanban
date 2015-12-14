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
    return <div onClick={this.edit.bind(this)}>{this.props.task}</div>;
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
  }
}