import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import todo from './todo';

let store = null;

const configureStore = (translations = {}) => {
  if (store) {
    return store;
  }

  const reducers = {
    todoState: todo
  };

  const initialState = {};

  const rootReducer = combineReducers(reducers);

  const enhancer = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );

  store = createStore(rootReducer, initialState, enhancer);
  return store;
};

export const getState = () => {
  if (store) {
    return store.getState();
  }

  return {};
};

export default configureStore;
