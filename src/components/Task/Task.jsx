import { useReducer } from 'react'
import { VscTrash, VscEdit } from 'react-icons/vsc'
import PropTypes from 'prop-types'
import TaskDueDate from './TaskDueDate'
import TaskModal from '../Modals/TaskModal'

const Task = ({ task, onDelete, onClose, onEdit }) => {
  const [isTaskFormOpen, setIsTaskFormOpen] = useReducer(
    (isTaskFormOpen => !isTaskFormOpen),
    false);

  console.log(task);
  return (
    <>
      <div className={`task ${task.checked == true || task.completed_at ? "active" : ""}`} data-cy='task'>
        <div className='task__row'>
          <input checked={task.checked == true || task.completed_at ? true : false} name="complete" onChange={() => onClose(task.id)} type='checkbox' value={task.checked} />
          <div
            className='task__name'
            data-cy='task__name'
            onClick={setIsTaskFormOpen}>
            {task.content}
          </div>
          <div className='task__icons'>
            <VscTrash data-cy='task__delete' onClick={() => onDelete(task.id)} />
            {/* <pre>{task.added_at}</pre> */}
            {task.completed_at ? null : <VscEdit onClick={setIsTaskFormOpen} />}
          </div>
        </div>
        <div
          className='task__row'
          style={{ display: task.description ? 'grid' : 'none' }}>
          <div
            className='task__description'
            onClick={setIsTaskFormOpen}>
            {task.description}
          </div>
        </div>
        <div
          className='task__row'
          style={{ display: task.due ? 'grid' : 'none' }}>
          <TaskDueDate taskAded={task.added_at} taskDate={task.due} />
        </div>
      </div>

      <hr />
      {isTaskFormOpen === true ? <TaskModal isOpen={setIsTaskFormOpen} onEdit={onEdit} taskToEdit={task} /> : null}
    </>
  );

};

Task.propTypes = {
  task: PropTypes.object,
  title: PropTypes.string,
  onDelete: PropTypes.func,
  onClose: PropTypes.func,
  onEdit: PropTypes.func,
}

export default Task;
