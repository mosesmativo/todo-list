import './App.css'
import { Button } from './components/Buttons/Button'

function App() {
  return (
    <div className="App">
      <h1>My Todo List Start</h1>
      <Button label="Add Todo" onClick={() => {
        return alert("Configure Add Todo");
      }} primary size="large" />
    </div>
  )
}

export default App
