import { useReducer, useState, useEffect } from 'react';
import { GetAllItems, GetCompleteTodoItems, createTodoItems } from '../../lib/Requests';
import { VscAdd } from 'react-icons/vsc';
import TaskModal from '../Modals/TaskModal'
import TodoList from '../TodoList';


const TaskAdd = () => {
  const [isTaskFormOpen, setIsTaskFormOpen] = useReducer(
    (isTaskFormOpen => !isTaskFormOpen),
    false);

  const [notCompleteTasks, setNotCompleteTasks] = useState([])

  const [completeTasks, setcompleteTasks] = useState([]);

  useEffect(() => {

    GetAllItems(setNotCompleteTasks)
    GetCompleteTodoItems(setcompleteTasks)

  }, [notCompleteTasks, isTaskFormOpen]);

  return (
    <>
      {isTaskFormOpen ? (
        <TaskModal isOpen={() => setIsTaskFormOpen()} onCreate={createTodoItems} />
      ) : (
        <div
          className='addTask__line'
          data-cy='addTask'
          onClick={() => setIsTaskFormOpen()}>
          <VscAdd className='addTask__icon' />
          <div className='addTask__text'>Add Task</div>
        </div>
      )}
      <TodoList completed={completeTasks} uncompleted={notCompleteTasks} />
    </>
  );
};

export default TaskAdd;
