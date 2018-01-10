import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';

class Input extends Component {
  handleClick = event => {
    event.preventDefault();
    const todo = this.textInput.value;
    this.props.addTodo(todo);
    this.textInput.value = null;
  };

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const todo = this.textInput.value;
      this.props.onClick(todo);
      this.textInput.value = null;
    }
  };
  render() {
    return (
      <div className="inputTodo">
        <input
          className="inputBox"
          onKeyPress={this.handleKeyPress}
          autoFocus
          ref={input => (this.textInput = input)}
          type="text"
          required
          placeholder=" What do you need to do?"
        />
        <button className="button" onClick={this.handleClick} type="submit">
          <i className="fa fa-plus" aria-hidden="true" />
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: bindActionCreators(addTodo, dispatch)
});

export default connect(null, mapDispatchToProps)(Input);
