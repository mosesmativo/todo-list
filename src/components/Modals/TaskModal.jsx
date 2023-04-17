import PropTypes from 'prop-types'
import TaskForm from '../TaskForm/TaskForm'

const TaskModal = ({ children }) => {

  return (
    <div className='modal__bgOverlay'>
      <div className='modal__formContainer'>
        <TaskForm inModal='taskForm--inModal' />
        {children}
      </div>
    </div>
  );
};

TaskModal.propTypes = {
  children: PropTypes.node,
}

export default TaskModal;
