import { BsCalendar4Event } from 'react-icons/bs';
import PropTypes from 'prop-types'


const TaskDueDate = ({ task }) => {
  const handleTaskModalOpen = () => {

  }

  return (
    <div
      className='task__dueDateContainer'
      onClick={() => handleTaskModalOpen(task)}>
      <span className='task__dueDateIcon'>
        <BsCalendar4Event />
      </span>
      <span className='task__dueDate'>date</span>
    </div>
  );
};

TaskDueDate.propTypes = {
  task: PropTypes.object,
}

export default TaskDueDate;
