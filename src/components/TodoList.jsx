
import Task from './Task/Task'
import { useIncomplete } from '../hooks/useIncomplete'
import { useCompleted } from "../hooks/useCompleted"


function TodoList() {

  // getting complete and incomplete tasks from our custom hooks
  const notcompleted = useIncomplete();
  const complete = useCompleted();

  // combining complete amd incomplete to create an array of all items (concat)
  const all = [...notcompleted, ...complete];

  return (
    <>
      {all.map((tasks, i) => (
        <Task key={i} task={tasks} title="Tasks To Complete" />
      ))}
    </>
  )
}

export default TodoList;
