
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GetAllItems } from '../lib/Requests';
import Task from './Task/Task'


const RestTodolist = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    GetAllItems(setTasks)

  }, []);

  const items = tasks.items;
  return (
    <>

      <ol>
        <h1>Incomplete Taks</h1>
        {items && items.length > 0 && items.map(item => (
          <Task key={item.id} task={item} />
        ))}
      </ol>
    </>
  );
}
RestTodolist.propTypes = {
  inputDesc: PropTypes.string,
  inputTitle: PropTypes.string,
}

export default RestTodolist;
