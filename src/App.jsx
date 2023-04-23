import { Toaster } from 'react-hot-toast'
import './App.scss'
import TodoList from './components/TodoList'


function App() {

  return (
    <div className="container">
      <div className="header">
        <h1>Prodapt Todo List App</h1>
      </div>

      <div className='page' data-cy='page'>
        <div className="content">
          <TodoList />
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
