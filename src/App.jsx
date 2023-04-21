import { Toaster } from 'react-hot-toast';
import './App.scss'
import TaskAdd from './components/Task/TaskAdd';
import Filter from './components/Filter';


function App() {

  return (
    <div className="container">
      <div className="header">
        <h1>Prodapt Todo List App</h1>
      </div>

      <div className='page' data-cy='page'>
        <div className="content">
          <Filter />
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
