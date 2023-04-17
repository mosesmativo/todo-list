// import { useContext } from 'react';
// import { TaskFormContext } from '../../contexts/TaskFormContext';
// import { TaskModalContext } from '../../contexts/TaskModalContext';
import PopTypes from 'prop-types'
// import useTaskForm from '../../hooks/useTaskForm';

const TaskFormButtons = ({ setIsTaskFormOpen, id }) => {

  const { isTaskModalOpen } = () => {

  };
  const handleTaskFormCancel = () => {
    setIsTaskFormOpen()
  };

  const primaryBtnText = isTaskModalOpen && id ? 'Save' : 'Add Task';

  return (
    <div className='taskForm__buttons'>
      <button
        className='button button__primary'
        type='submit'
        value=''>
        {primaryBtnText}
      </button>
      <button
        className='button button__secondary'
        onClick={handleTaskFormCancel}
        type='button'>
        Cancel
      </button>
    </div>
  );
};

TaskFormButtons.propTypes = {
  id: PopTypes.number,
  setIsTaskFormOpen: PopTypes.func,
}
export default TaskFormButtons;
