import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './types';

const addTodo = text => {
  return { type: ADD_TODO, text };
};

const toggleTodo = index => {
  return { type: TOGGLE_TODO, index };
};

const setVisibilityFilter = filter => {
  return { type: SET_VISIBILITY_FILTER, filter };
};

export default {
  addTodo,
  toggleTodo,
  setVisibilityFilter
};
