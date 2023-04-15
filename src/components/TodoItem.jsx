import PropTypes from 'prop-types';
import { Button } from './Buttons/Button';

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
      <Button label="Edit" onClick={() => updateTodo(id, { title: "Buy bread", complete: true })} />
      <Button backgroundColor="#C41E3A" label="Delete" onClick={() => deleteTodo(id)} primary />
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
