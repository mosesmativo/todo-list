import PropTypes from 'prop-types'

const TaskCheckbox = ({ task }) => {
  const { closeTask } = () => {

  }

  return (
    <label className='checkbox'>
      <input
        checked={task}
        data-cy='checkbox'
        onChange={() => closeTask(task)}
        type='checkbox'></input>
      <span className='checkbox__checkmark'></span>
    </label>
  );
};

TaskCheckbox.propTypes = {
  task: PropTypes.bool,
}

export default TaskCheckbox;
