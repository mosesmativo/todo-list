import { Toaster } from 'react-hot-toast'
import './App.scss'
import TaskAdd from './components/Task/TaskAdd'


function App() {

  return (
    <div className="container">
      <div className="header">
        <h1>Prodapt Todo List App</h1>
      </div>

      <div className='page' data-cy='page'>
        <div className="content">
          <TaskAdd />
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
        </div>
      </div>
    </div>
  )
}

export default App
