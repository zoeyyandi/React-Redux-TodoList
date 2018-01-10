import { combineReducers } from 'redux';
import todos from './todos';
import tabs from './tabs';

const rootReducer = combineReducers({
  todos,
  tabs
});

export default rootReducer;
