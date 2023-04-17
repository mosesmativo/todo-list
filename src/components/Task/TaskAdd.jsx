import { useReducer } from 'react';
import { VscAdd } from 'react-icons/vsc';
import TaskForm from '../TaskForm/TaskForm';
import PropTypes from 'prop-types';
// import useTaskForm from '../../hooks/useTaskForm';

const TaskAdd = ({ dueDate }) => {
  const [isTaskFormOpen, setIsTaskFormOpen] = useReducer(
    (isTaskFormOpen => !isTaskFormOpen),
    false);

  const handleTaskFormOpen = () => {
    setIsTaskFormOpen()
  };

  return (
    <>
      <div className='task'>
        {isTaskFormOpen ? (
          <TaskForm
            isTaskFormOpen={isTaskFormOpen}
            setIsTaskFormOpen={setIsTaskFormOpen}
          />
        ) : (
          <div
            className='addTask__line'
            data-cy='addTask'
            onClick={() => handleTaskFormOpen(isTaskFormOpen, dueDate)}>
            <VscAdd className='addTask__icon' />
            <div className='addTask__text'>Add Task</div>
          </div>
        )}
      </div>
    </>
  );
};

TaskAdd.propTypes = {
  dueDate: PropTypes.bool,
}
export default TaskAdd;
