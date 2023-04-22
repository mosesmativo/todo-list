
import Task from './Task/Task'
import { useIncomplete } from '../hooks/useIncomplete'
import { useCompleted } from "../hooks/useCompleted"
import { Button } from "./Buttons/Button"
import { FiList, FiEyeOff, FiCheckCircle } from "react-icons/fi"
import { useState } from 'react';


function TodoList() {
  const [type, setType] = useState('all')

  // getting complete and incomplete tasks from our custom hooks
  const notcompleted = useIncomplete();
  const complete = useCompleted();

  // combining complete amd incomplete to create an array of all items (Concat)
  const all = [...notcompleted, ...complete];

  return (
    <>
      <div className="filter-holder">
        <Button
          label="All"
          onClick={() => setType('all')}
          primary>
          <FiList />
        </Button>
        <Button
          label="Commplete"
          onClick={() => setType('complete')}
          primary
        ><FiCheckCircle /></Button>
        <Button
          label="Incommplete"
          onClick={() => setType('incomplete')}
          primary>
          <FiEyeOff />
        </Button>
      </div>
      {type === "all" ?
        all.map((tasks, i) => (
          <Task
            key={i}
            task={tasks}
            title="Tasks To Complete"
          />
        )) : null
      }
      {type === "complete" ?
        complete.map((tasks, i) => (
          <Task
            key={i}
            task={tasks}
            title="Tasks To Complete"
          />
        )) : null
      }
      {type === "incomplete" ?
        notcompleted.map((tasks, i) => (
          <Task
            key={i}
            task={tasks}
            title="Tasks To Complete"
          />
        )) : null
      }
    </>
  );
}

export default TodoList;
