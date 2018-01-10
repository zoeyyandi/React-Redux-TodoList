import {
  SHOW_ACTIVE,
  SHOW_COMPLETED,
  SHOW_ALL
} from '../constants/actionTypes';

const defaultState = {
  isActive: false,
  isComplete: false,
  isAll: true
};

const tabs = (state = defaultState, action) => {
  switch (action.type) {
    case SHOW_ALL:
      return {
        ...state,
        isActive: false,
        isComplete: false,
        isAll: true
      };
    case SHOW_COMPLETED:
      return {
        ...state,
        isActive: false,
        isComplete: true,
        isAll: false
      };
    case SHOW_ACTIVE:
      return {
        ...state,
        isActive: true,
        isComplete: false,
        isAll: false
      };
    default:
      return state;
  }
};

export default tabs;
