import { useReducer } from 'react'
import { VscAdd } from 'react-icons/vsc'
import { useAdd } from '../../hooks/useAdd'
import TaskModal from '../Modals/TaskModal'
import TodoList from '../TodoList'
import { useAll } from '../../hooks/useAll'



const TaskAdd = () => {
  const [isOpen, setIsOpen] = useReducer(
    (isOpen => !isOpen),
    null)


  return (
    <>
      {isOpen ? (
        <TaskModal isOpen={setIsOpen} onCreate={useAdd} />
      ) : (
        <div
          className='addTask__line'
          data-cy='addTask'
          onClick={() => setIsOpen()}>
          <VscAdd className='addTask__icon' />
          <div className='addTask__text'>Add Task</div>
        </div>
      )}
      <TodoList isOpen={setIsOpen} />
    </>
  )
}

export default TaskAdd
