import PropTypes from 'prop-types';

import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo, updateTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map(todo => {
        return (
          <TodoItem
            {...todo}
            deleteTodo={deleteTodo}
            key={todo.id}
            toggleTodo={toggleTodo}
            updateTodo={updateTodo}
          />
        )
      })}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
}
