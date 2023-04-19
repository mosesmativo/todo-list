import { useReducer } from 'react';
import { VscAdd } from 'react-icons/vsc';
import TaskModal from '../Modals/TaskModal'
import { createTodoItems } from '../../lib/Requests'
import TodoList from '../TodoList';

const TaskAdd = () => {
  const [isTaskFormOpen, setIsTaskFormOpen] = useReducer(
    (isTaskFormOpen => !isTaskFormOpen),
    false);

  return (
    <>
      {isTaskFormOpen ? (
        <TaskModal isOpen={setIsTaskFormOpen} onCreate={createTodoItems} />
      ) : (
        <div
          className='addTask__line'
          data-cy='addTask'
          onClick={() => setIsTaskFormOpen()}>
          <VscAdd className='addTask__icon' />
          <div className='addTask__text'>Add Task</div>
        </div>
      )}
      <TodoList />
    </>
  );
};

export default TaskAdd;
