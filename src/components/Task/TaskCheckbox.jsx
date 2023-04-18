import PropTypes from 'prop-types'

const TaskCheckbox = ({ task, completed }) => {
  return (
    <label className={`checkbox ${task === true || completed ? "active" : "not"}`}>
      <input
        data-cy='checkbox'
        type='checkbox'></input>
      <span className='checkbox__checkmark'></span>
    </label>
  );
};

TaskCheckbox.propTypes = {
  task: PropTypes.bool,
  completed: PropTypes.string
}

export default TaskCheckbox;
