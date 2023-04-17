
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GetAllItems, GetCompleteTodoItems } from '../lib/Requests';
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
      <h1>Tasks To Complete </h1>
      {notcompleted && notcompleted.length > 0 && notcompleted.map(item => (
        <Task key={item.id} task={item} />
      ))}

      <h1>Completed Taks</h1>
      {completed && completed.length > 0 && completed.map(item => (
        <Task key={item.id} task={item} />
      ))}
    </>
  );
}
TodoList.propTypes = {
  inputDesc: PropTypes.string,
  inputTitle: PropTypes.string,
}

export default TodoList;
