import { useReducer } from 'react';
import { VscAdd } from 'react-icons/vsc';
import TaskModal from '../Modals/TaskModal'
import TodoList from '../TodoList';
import { useAdd } from '../../hooks/useAdd';


const TaskAdd = () => {
  const [isTaskFormOpen, setIsTaskFormOpen] = useReducer(
    (isTaskFormOpen => !isTaskFormOpen),
    false);

  return (
    <>
      {isTaskFormOpen ? (
        <TaskModal isOpen={() => setIsTaskFormOpen()} onCreate={useAdd} />
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
