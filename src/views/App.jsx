import React, { Component } from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import configureStore from '../state/store';
import TodoList from './TodoList';

import './App.css';

class App extends Component {
  render() {
    const store = configureStore();

    return (
      <ReduxProvider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">React ToDo</h1>
          </header>
          <p className="App-intro">Simple ToDo-List using React + Redux</p>
          <TodoList />
        </div>
      </ReduxProvider>
    );
  }
}

export default App;
