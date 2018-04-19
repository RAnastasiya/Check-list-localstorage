import React, { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick, ColorWhite, ColorPink, ColorGreen,ColorYellow }) => (

    <div className="lists">
      <ul>
        {todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id)}
            ColorWhite={() => ColorWhite(todo.color="#fff")}
            ColorPink={() => ColorPink(todo.color="#ffc0cb")}
            ColorGreen={() => ColorGreen(todo.color="#d0edd7")}
            ColorYellow={() => ColorYellow(todo.color="#FFFF00")}
          />
        )}
      </ul>
    </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired,
    ColorWhite: PropTypes.func.isRequired,
    ColorPink: PropTypes.func.isRequired,
    ColorGreen: PropTypes.func.isRequired,
    ColorYellow: PropTypes.func.isRequired
};

export default TodoList
