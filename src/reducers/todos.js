import * as types from '../constants/actionTypes';
import localforage from 'localforage';
const uuidv4 = require('uuid/v4');

const defaultState = [
  {
    id: uuidv4(),
    todo: 'Wash dishes',
    isComplete: false,
    isEditing: false
  },
  {
    id: uuidv4(),
    todo: 'Grocery shopping',
    isComplete: false,
    isEditing: false
  },
  {
    id: uuidv4(),
    todo: 'Walk the dog',
    isComplete: false,
    isEditing: false
  }
];

const todos = (state = defaultState, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      let newTodoList1 = [
        {
          id: action.id,
          todo: action.text,
          isComplete: false,
          isEditing: false
        },
        ...state
      ];
      localforage
        .setItem('todoList', newTodoList1)
        .then(() => console.log('saved'))
        .catch(err => {
          console.log(err);
        });
      return newTodoList1;

    case types.DELETE_TODO:
      let newTodoList2 = state.filter(todo => todo.id !== action.id);
      localforage
        .setItem('todoList', newTodoList2)
        .then(() => console.log('saved'))
        .catch(err => {
          console.log(err);
        });
      return newTodoList2;

    case types.UPDATE_TODO:
      let newTodoList3 = state.map(
        todo =>
          todo.id === action.id
            ? { ...todo, todo: action.text, isEditing: !todo.isEditing }
            : todo
      );
      localforage
        .setItem('todoList', newTodoList3)
        .then(() => console.log('saved'))
        .catch(err => {
          console.log(err);
        });
      return newTodoList3;

    case types.TOGGLE_COMPLETE:
      return state.map(
        todo =>
          todo.id === action.id
            ? { ...todo, isComplete: !todo.isComplete }
            : todo
      );
    case types.TOGGLE_EDITING:
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, isEditing: !todo.isEditing } : todo
      );
    default:
      return state;
  }
};

export default todos;
