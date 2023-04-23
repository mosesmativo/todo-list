import PropTypes from 'prop-types'
import { useReducer } from 'react'
import { VscAdd } from 'react-icons/vsc'

import TaskModal from '../Modals/TaskModal'



const TaskAdd = ({ onCreate }) => {
  const [isOpen, setIsOpen] = useReducer(
    (isOpen => !isOpen),
    null)


  return (
    <>
      {isOpen ? (
        <TaskModal isOpen={setIsOpen} onCreate={onCreate} />
      ) : null}

      <div
        className='addTask__line'
        data-cy='addTask'
        onClick={() => setIsOpen()}>
        <VscAdd className='addTask__icon' />
        <div className='addTask__text'>Add Task</div>
      </div>
    </>
  )
}

TaskAdd.propTypes = {
  onCreate: PropTypes.func,
}
export default TaskAdd
