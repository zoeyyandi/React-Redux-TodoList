import * as types from '../constants/actionTypes';
const uuidv4 = require('uuid/v4');

export const addTodo = text => {
  return {
    type: types.ADD_TODO,
    id: uuidv4(),
    text
  };
};

export const deleteTodo = id => {
  return {
    type: types.DELETE_TODO,
    id
  };
};

export const updateTodo = (id, text) => {
  return {
    type: types.UPDATE_TODO,
    text,
    id
  };
};

export const toggleComplete = id => {
  return {
    type: types.TOGGLE_COMPLETE,
    id
  };
};

export const toggleEditing = id => {
  return {
    type: types.TOGGLE_EDITING,
    id
  };
};

export const showAll = () => {
  return {
    type: types.SHOW_ALL
  };
};

export const showCompleted = () => {
  return {
    type: types.SHOW_COMPLETED
  };
};

export const showActive = () => {
  return {
    type: types.SHOW_ACTIVE
  };
};
