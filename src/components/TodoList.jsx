
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GetAllItems, GetCompleteTodoItems, DeleteTodoItems, CloseTodo, UpdateTodoItem } from '../lib/Requests';
import Task from './Task/Task'


const TodoList = () => {
  const [notCompleteTasks, setNotCompleteTasks] = useState([]);
  const [completeTasks, setcompleteTasks] = useState([]);

  useEffect(() => {
    GetAllItems(setNotCompleteTasks)
    GetCompleteTodoItems(setcompleteTasks)

  }, []);

  const notcompleted = notCompleteTasks.items;
  const completed = completeTasks.items;

  return (
    <>
      {notcompleted && notcompleted.length > 0 && notcompleted.map(item => (
        <Task key={item.id} onClose={CloseTodo} onDelete={DeleteTodoItems} onEdit={UpdateTodoItem} task={item} title="Tasks To Complete" />
      ))}

      {completed && completed.length > 0 && completed.map(item => (
        <Task key={item.id} onClose={CloseTodo} onDelete={DeleteTodoItems} onEdit={UpdateTodoItem} task={item} title="Completed Taks" />
      ))}
    </>
  );
}
TodoList.propTypes = {
  inputDesc: PropTypes.string,
  inputTitle: PropTypes.string,
  UpdateTodoItem: PropTypes.string,
}

export default TodoList;
