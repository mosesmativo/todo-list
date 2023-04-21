import { useReducer } from 'react'
import { VscTrash, VscEdit } from 'react-icons/vsc'
import PropTypes from 'prop-types'
import TaskDueDate from './TaskDueDate'
import TaskModal from '../Modals/TaskModal'
import { useDelete } from '../../hooks/useDelete'
import { useUndo } from '../../hooks/useUndo'
import { useUpdate } from '../../hooks/useUpdate'
import { useClose } from '../../hooks/useClose'

const Task = ({ task }) => {
  // We are dispatching setTaskFormOpen function to toggle the modal
  const [isTaskFormOpen, setIsTaskFormOpen] = useReducer(
    (isTaskFormOpen => !isTaskFormOpen),
    false);

  return (
    <>
      <div className={`task ${task.checked == true || task.completed_at ? "active" : ""}`} data-cy='task'>
        <div className='task__row'>
          <input checked={task.checked == true || task.completed_at ? true : false} name="complete" onChange={() => { task.checked == true ? useUndo(task.id) : useClose(task.id) }} type='checkbox' value={task.checked} />

          <div
            className='task__name'
            data-cy='task__name'
            onClick={() => setIsTaskFormOpen()}>
            {task.content}
          </div>
          <div className='task__icons'>
            <VscTrash data-cy='task__delete' onClick={() => useDelete(task.id)} />
            {task.completed_at ? null : <VscEdit onClick={() => setIsTaskFormOpen()} />}
          </div>
        </div>
        <div
          className='task__row'
          style={{ display: task.description ? 'grid' : 'none' }}>
          <div
            className='task__description'
            onClick={() => setIsTaskFormOpen()}>
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
      {isTaskFormOpen === true ? <TaskModal isOpen={() => setIsTaskFormOpen()} onEdit={useUpdate} taskToEdit={task} /> : null}
    </>
  );

};

Task.propTypes = {
  task: PropTypes.array,
  title: PropTypes.string,
  onDelete: PropTypes.func,
  onClose: PropTypes.func,
  onEdit: PropTypes.func,
}

export default Task;
