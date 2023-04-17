import { VscTrash, VscEdit } from 'react-icons/vsc'
import PropTypes from 'prop-types'
// import useTasks from '../../hooks/useTasks'
// import useTaskModal from '../../hooks/useTaskModal'
import TaskCheckbox from './TaskCheckbox'
import TaskDueDate from './TaskDueDate'

const Task = ({ task }) => {

  const handleTaskModalOpen = () => {

  }
  const deleteTask = () => {

  }

  return (
    <>
      <div className='task' data-cy='task'>
        <div className='task__row'>
          <TaskCheckbox task={task.checked} />
          <div
            className='task__name'
            data-cy='task__name'
            onClick={() => handleTaskModalOpen(task)}>
            {task.content}
          </div>
          <div className='task__icons'>
            <VscTrash data-cy='task__delete' onClick={() => deleteTask(task.id)} />
            <VscEdit onClick={() => handleTaskModalOpen(task)} />
          </div>
        </div>
        <div
          className='task__row'
          style={{ display: task.description ? 'grid' : 'none' }}>
          <div
            className='task__description'
            onClick={() => handleTaskModalOpen(task)}>
            {task.description}
          </div>
        </div>
        <div
          className='task__row'
          style={{ display: task.due ? 'grid' : 'none' }}>
          <TaskDueDate task={task} />
        </div>
      </div>
      <hr />
    </>
  );

};

Task.propTypes = {
  task: PropTypes.object,
}

export default Task;
