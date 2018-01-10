import React, { Component } from 'react';
import * as todoActions from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Eachtodo extends Component {
  handleClick = event => {
    this.props.actions.deleteTodo(this.props.id);
  };
  handleEditClick = event => {
    this.props.actions.toggleEditing(this.props.id);
  };
  handleCompleteClick = event => {
    event.preventDefault();
    this.props.actions.toggleComplete(this.props.id);
  };
  handleUpdateClick = event => {
    event.preventDefault();
    const updatedTodo = this.textInput.value;
    this.props.actions.updateTodo(this.props.id, updatedTodo);
  };

  render() {
    const { todo } = this.props;
    return (
      <div className="eachTodo">
        {!todo.isEditing && (
          <p
            className="task"
            style={{
              textDecoration: todo.isComplete ? 'line-through' : 'none',
              color: todo.isComplete ? 'red' : 'black'
            }}
          >
            {todo.todo}
          </p>
        )}
        {todo.isEditing && (
          <form id="editForm" className="form">
            <input
              className="inputBox"
              id="editTask"
              type="text"
              autoFocus
              required
              defaultValue={todo.todo}
              placeholder={todo.todo}
              ref={input => (this.textInput = input)}
            />
            <button
              className="button"
              type="submit"
              onClick={this.handleUpdateClick}
            >
              <i className="fa fa-pencil-square-o" aria-hidden="true" />
            </button>
          </form>
        )}

        {!todo.isEditing && (
          <div className="rightButtons">
            <button className="button" onClick={this.handleEditClick}>
              <i className="fa fa-pencil" aria-hidden="true" />
            </button>
            <button className="button" onClick={this.handleClick}>
              <i className="fa fa-trash" aria-hidden="true" />
            </button>
            <button className="button" onClick={this.handleCompleteClick}>
              <i className="fa fa-check" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...todoActions }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Eachtodo);
