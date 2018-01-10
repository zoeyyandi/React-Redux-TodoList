import * as types from '../constants/actionTypes';
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
      return [
        {
          id: action.id,
          todo: action.text,
          isComplete: false,
          isEditing: false
        },
        ...state
      ];
    case types.DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);

    case types.UPDATE_TODO:
      return state.map(
        todo =>
          todo.id === action.id
            ? { ...todo, todo: action.text, isEditing: !todo.isEditing }
            : todo
      );
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
