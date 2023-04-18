import { useReducer } from 'react';
import { VscAdd } from 'react-icons/vsc';
import TaskModal from '../Modals/TaskModal'
import { createTodoItems } from '../../lib/Requests'

const TaskAdd = () => {
  const [isTaskFormOpen, setIsTaskFormOpen] = useReducer(
    (isTaskFormOpen => !isTaskFormOpen),
    false);

  return (
    <>
      <div className='task'>
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
      </div>

    </>
  );
};

export default TaskAdd;
