import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { todoSelectors, todoOperations } from '../state/todo';
import TodoListItem from './TodoListItem';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addText: ''
    };
  }

  render() {
    const { todos, addTodo, toggleTodo } = this.props;
    const { addText } = this.state;
    const list = todos.map((todo, index) => (
      <TodoListItem
        text={todo.text}
        key={todo.text}
        completed={todo.completed}
        onChange={() => toggleTodo(index)}
      />
    ));

    return (
      <div>
        <table style={{ margin: '0 auto' }}>
          <tbody>{list}</tbody>
        </table>
        <div>
          <input
            value={addText}
            onChange={e => this.setState({ addText: e.target.value })}
            style={{ fontSize: '2em' }}
          />
          <button
            onClick={() => {
              addTodo(addText);
              this.setState({ addText: '' });
            }}
            style={{ fontSize: '2em' }}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: todoSelectors.getTodos(state)
});

const mapDispatchToProps = dispatch => ({
  addTodo: title => dispatch(todoOperations.addTodo(title)),
  toggleTodo: index => dispatch(todoOperations.toggleTodo(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
