import PropTypes from 'prop-types';

export function TodoItem({ complete, id, title, toggleTodo, deleteTodo, updateTodo }) {
  return (
    <li>
      <label>
        <input
          checked={complete}
          onChange={e => toggleTodo(id, e.target.checked)}
          type="checkbox"
          value={complete}
        />
        {title}
      </label>
      <button className="btn" onClick={() => updateTodo(id, { title: "Buy bread", complete: true })}>
        Buy Bread
      </button>
      <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </li>
  )
}

TodoItem.propTypes = {
  complete: PropTypes.bool,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
}
