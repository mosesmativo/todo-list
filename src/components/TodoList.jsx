
import Task from './Task/Task'
import { useIncomplete } from '../hooks/useIncomplete'
import { useCompleted } from "../hooks/useCompleted"


function TodoList() {
  const notcompleted = useIncomplete();
  const complete = useCompleted();

  return (
    <>
      <Task items={notcompleted} title="Tasks To Complete" />
      <Task items={complete} title="Completed Taks" />
    </>
  );
}

export default TodoList;
