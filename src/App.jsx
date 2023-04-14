
import { useEffect, useState } from 'react';

import './App.scss'
import { Button } from './components/Buttons/Button'
import { InputField } from './components/Inputs/InputField';
import { NewTodoForm } from './components/NewTodoForm';
import { TodoList } from './components/TodoList';

function App() {
  const [todos, setTodos] = useState(() => {
    const localState = localStorage.getItem("ITEMS")
    if (localState === null) return []

    return JSON.parse(localState)

  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
    console.log(todos);
  }, [todos]);

  function addTodos(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, complete: false }
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  function updateTodo(id, updates) {
    setTodos(currentTodos =>
      currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, ...updates }
        }
        return todo
      })
    )
  }


  return (
    <div className="container">
      <NewTodoForm onSubmit={addTodos} />
      <TodoList deleteTodo={deleteTodo} todos={todos} toggleTodo={toggleTodo} updateTodo={updateTodo} />
      <h1>My Todo List Start</h1>
      <Button label="All" onClick={() => { }} primary size="medium" />
      <Button label="Incomplete" onClick={() => { }} primary size="medium" />
      <Button label="Completed" onClick={() => { }} primary size="medium" />

      <form>

        <InputField label="Todo Title" name='title' onChange={() => { }} type='text' value='' />
        <Button label="Add Todo" onClick={() => {
          return alert("Configure Add Todo");
        }} primary size="large" />
      </form>

    </div>
  )
}

export default App
