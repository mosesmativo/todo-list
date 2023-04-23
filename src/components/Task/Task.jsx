import { useReducer } from 'react'
import './Task.scss'
import { VscTrash, VscEdit } from 'react-icons/vsc'
import PropTypes from 'prop-types'
import TaskDueDate from './TaskDueDate'
import TaskModal from '../Modals/TaskModal'
import { useUpdate } from '../../hooks/useUpdate'



const Task = ({ task, onDelete, onCheck, isOpen }) => {

  // We are dispatching setTaskFormOpen function to toggle the modal
  const [isTaskFormOpen, setIsTaskFormOpen] = useReducer(
    (isTaskFormOpen => !isTaskFormOpen),
    null)

  return (
    <>
      <div className={`task ${task.checked == true || task.completed_at ? "active" : ""}`} data-cy='task'>
        <div className='task__row'>

          <label className='checkbox'>
            <input
              checked={task.checked == true || task.completed_at ? true : false}
              data-cy='checkbox'
              onChange={() => onCheck(task)}
              type='checkbox'
              value={task.checked}
            ></input>
            <span className='checkbox__checkmark'></span>
          </label>

          <div
            className='task__name'
            data-cy='task__name'
            onClick={() => isOpen()}>
            {task.content}
          </div>
          <div className='task__icons'>
            <VscTrash data-cy='task__delete' onClick={() => onDelete(task.id)} />
            {task.completed_at ? null : <VscEdit onClick={() => isOpen()} />}
          </div>
        </div>
        <div
          className='task__row'
          style={{ display: task.description ? 'grid' : 'none' }}>
          <div
            className='task__description'
            onClick={() => isOpen()}>
            {task.description}
          </div>
        </div>
        <div
          className='task__row'
          style={{ display: task.due ? 'grid' : 'none' }}>
          <TaskDueDate taskAded={task.due} />
        </div>
      </div>

      <hr />
      {isOpen === true ? <TaskModal isOpen={isOpen} onEdit={useUpdate} taskToEdit={task} /> : null}
    </>
  )

}

Task.propTypes = {
  task: PropTypes.object,
  title: PropTypes.string,
  onDelete: PropTypes.func,
  onClose: PropTypes.func,
  isOpen: PropTypes.func,
  onCheck: PropTypes.func,
}

export default Task;
