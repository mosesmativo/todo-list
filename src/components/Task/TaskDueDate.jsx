import { BsCalendar4Event } from 'react-icons/bs';
import PropTypes from 'prop-types'


const TaskDueDate = ({ taskAded }) => {
  return (
    <>

      <div
        className='task__dueDateContainer'
        onClick={() => { }}>
        <span className='task__dueDateIcon'>
          <BsCalendar4Event />
        </span>
        <span className='task__dueDate'>{taskAded.date ? taskAded.date : null}</span>
      </div>
    </>
  );
};

TaskDueDate.propTypes = {
  taskAded: PropTypes.object,

}
export default TaskDueDate;
