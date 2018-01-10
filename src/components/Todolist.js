import React, { Component } from 'react';
import { connect } from 'react-redux';
import Eachtodo from './Eachtodo.js';
import { bindActionCreators } from 'redux';
import { showActive, showCompleted, showAll } from '../actions/index';

class Todolist extends Component {
  handleAll = event => {
    this.props.actions.showAll();
  };

  handleActive = event => {
    this.props.actions.showActive();
  };

  handleCompleted = event => {
    this.props.actions.showCompleted();
  };

  render() {
    const { todos, tabs } = this.props;
    return (
      <div className="todoList">
        <div className="tab">
          <button className="tabs" onClick={this.handleAll}>
            All
          </button>
          <button className="tabs" onClick={this.handleActive}>
            Active
          </button>
          <button className="tabs" onClick={this.handleCompleted}>
            Completed
          </button>
        </div>
        {tabs.isActive &&
          todos
            .filter(todo => !todo.isComplete)
            .map((todo, index) => (
              <Eachtodo todo={todo} id={todo.id} key={index} />
            ))}
        {tabs.isAll &&
          todos.map((todo, index) => (
            <Eachtodo todo={todo} id={todo.id} key={index} />
          ))}
        {tabs.isComplete &&
          todos
            .filter(todo => todo.isComplete)
            .map((todo, index) => (
              <Eachtodo todo={todo} id={todo.id} key={index} />
            ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
  tabs: state.tabs
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ showActive, showAll, showCompleted }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);
