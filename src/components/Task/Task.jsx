import { useReducer, useEffect } from 'react'
import { VscTrash, VscEdit } from 'react-icons/vsc'
import PropTypes from 'prop-types'
import TaskDueDate from './TaskDueDate'
import { DeleteTodoItems, CloseTodo } from '../../lib/Requests'
import { OpenModals } from '../../lib/OpenModals'

const Task = ({ task }) => {
  const [isTaskFormOpen, setIsTaskFormOpen] = useReducer(
    (isTaskFormOpen => !isTaskFormOpen),
    false);

  useEffect(() => {
    OpenModals(isTaskFormOpen, task)
  }, [isTaskFormOpen])

  return (
    <>
      <div className='task' data-cy='task'>
        <div className='task__row'>
          <input checked={task.checked == true || task.completed_at ? true : false} name="complete" onChange={() => CloseTodo(task.id)} type='checkbox' value={task.checked} />
          <div
            className='task__name'
            data-cy='task__name'
            onClick={setIsTaskFormOpen}>
            {task.content}
          </div>
          <div className='task__icons'>
            <VscTrash data-cy='task__delete' onClick={() => DeleteTodoItems(task.id)} />
            <VscEdit onClick={setIsTaskFormOpen} />
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
          <TaskDueDate task={task.due} />
        </div>
      </div>

      {/* {JSON.stringify(task)} */}
      <hr />
    </>
  );

};

Task.propTypes = {
  task: PropTypes.object,
}

export default Task;
