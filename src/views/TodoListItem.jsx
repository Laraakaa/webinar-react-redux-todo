import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = ({ text, completed, onChange }) => {
  const onClick = e => onChange(e.target.checked);

  return (
    <tr style={{ height: 40, fontSize: '2em' }}>
      <td>
        <input type="checkbox" checked={completed} onClick={onClick} />
      </td>
      <td>{text}</td>
    </tr>
  );
};

export default TodoListItem;
