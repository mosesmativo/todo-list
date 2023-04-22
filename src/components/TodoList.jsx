import { useEffect, useState, useReducer } from 'react'
import { Button } from "./Buttons/Button"
import Task from './Task/Task'
import { FiList, FiEyeOff, FiCheckCircle } from "react-icons/fi"
import { useDelete } from '../hooks/useDelete'
import { useClose } from '../hooks/useClose'
import { useUndo } from '../hooks/useUndo'
import { useAll } from '../hooks/useAll'
import PropTypes from 'prop-types'

function TodoList({ isOpen }) {
  const [name, setType] = useState('all')
  const [updatedTask, setUpdatedTask] = useState([])

  // This Hook toogles betwen checked items when setIsChecked function is dispatched 
  const [isChecked, setIsChecked] = useReducer(
    (isChecked => !isChecked),
    null)

  //Get the deleteItem Function from the Hook 
  const { deleteItem } = useDelete()

  // Fetching all the items using useAll Hook
  const { fetchAll } = useAll()

  // Get Updated Data and updated to tasks 
  useEffect(() => {
    const allItems = async () => {
      const allTasks = await fetchAll()
      setUpdatedTask(allTasks)
    }
    allItems()
  }, [name, isChecked])

  // Handle Deleting Tasks using their ID 
  const handleDelete = async (id) => {
    await deleteItem(id)
    const all = await fetchAll()
    setUpdatedTask(all)
  }
  // Handles toggling of open and closed task while updating the tasks 
  const isCheckedChange = async (task) => {
    if (task.checked == true) {
      useUndo(task.id)
      setIsChecked()
    } else {
      useClose(task.id)
      setIsChecked()
    }
    const all = await fetchAll()
    setUpdatedTask(all)
  }

  // getting complete and incomplete tasks from our custom hooks
  const notcompleted = updatedTask.filter(task => task.checked === false)
  const complete = updatedTask.filter(task => task.checked === true)

  return (
    <>
      {updatedTask.length === 0 && "No Todos"}
      <div className="filter-holder">
        <Button
          label="All"
          onClick={() => setType('all')}
          primary={name === 'all' ? true : false}
          size="small"
        >
          <FiList />
        </Button>
        <Button
          label="Commplete"
          onClick={() => setType('complete')}
          primary={name === 'complete' ? true : false}
          size="small"
        ><FiCheckCircle /></Button>
        <Button
          label="Incommplete"
          onClick={() => setType('incomplete')}
          primary={name === 'incomplete' ? true : false}
          size="small"
        >
          <FiEyeOff />
        </Button>
      </div>
      {name === "all" ?
        updatedTask.map((tasks, i) => (
          <Task
            isOpen={isOpen}
            key={i}
            onCheck={isCheckedChange}
            onDelete={handleDelete}
            task={tasks}
          />
        )) : null
      }
      {name === "complete" ?
        complete.map((tasks, i) => (
          <Task
            isOpen={isOpen}
            key={i}
            onCheck={isCheckedChange}
            onDelete={handleDelete}
            task={tasks}
          />
        )) : null
      }
      {name === "incomplete" ?
        notcompleted.map((tasks, i) => (
          <Task
            isOpen={isOpen}
            key={i}
            onCheck={isCheckedChange}
            onDelete={handleDelete}
            task={tasks}
          />
        )) : null
      }
    </>
  );
}

TodoList.propTypes = {
  isOpen: PropTypes.func,
}

export default TodoList
