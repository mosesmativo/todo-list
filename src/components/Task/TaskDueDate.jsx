import { BsCalendar4Event } from 'react-icons/bs';
import PropTypes from 'prop-types'


const TaskDueDate = ({ taskAded, taskDate }) => {

  const dateObject = new Date(taskAded.date)
  return (
    <>
      {/* <pre>
        {JSON.stringify(dateObject, null, 2)}
      </pre> */}
      <div
        className='task__dueDateContainer'
        onClick={() => { }}>
        <span className='task__dueDateIcon'>
          <BsCalendar4Event />
        </span>
        <span className='task__dueDate'>{taskAded.date}</span>
      </div>
    </>
  );
};

TaskDueDate.propTypes = {
  taskAded: PropTypes.object,
  taskDate: PropTypes.object,
}

export default TaskDueDate;
