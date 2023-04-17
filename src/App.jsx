import { Toaster } from 'react-hot-toast';
import './App.scss'
import RestTodolist from './components/RestTodolist';
import AxiosIncompleteTasks from './components/AxiosIncompleteTasks';
import TaskAdd from './components/Task/TaskAdd';


function App() {

  return (
    <div className="container">
      <div className="header">
        <h1>My Todo List Start</h1>
      </div>
      <div className="addtask">
        <TaskAdd />
      </div>
      <div>
        <RestTodolist />
      </div>
      <br></br>
      <div className="incomplete">
        <AxiosIncompleteTasks />
      </div>
      <br></br>

      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  )
}

export default App
