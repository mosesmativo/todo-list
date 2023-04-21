
import PropTypes from 'prop-types';
import Task from './Task/Task'


function TodoList({ completed, uncompleted }) {
  const notcompleted = uncompleted.items;
  const complete = completed.items;

  return (
    <>
      {notcompleted && notcompleted.length > 0 && notcompleted.map(item => (
        <Task key={item.id} task={item} title="Tasks To Complete" />
      ))}

      {complete && complete.length > 0 && complete.map(item => (
        <Task key={item.id} task={item} title="Completed Taks" />
      ))}
    </>
  );
}

TodoList.propTypes = {
  inputTitle: PropTypes.string,
  completed: PropTypes.any,
  uncompleted: PropTypes.any,
  UpdateTodoItem: PropTypes.string,
  UnDoCloseTodo: PropTypes.string,
}

export default TodoList;
