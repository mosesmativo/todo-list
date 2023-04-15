
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
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

  function toggleTodo(id, complete) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, complete }
        }

        return todo
      })
    });

    complete ?
      toast.success('To do Complete', {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        }
      }) : toast.success('Todo something', {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        }
      });

  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
    toast.success('To do deleted', {
      style: {
        border: '1px solid #713200',
        padding: '16px',
        color: '#713200',
      },
      iconTheme: {
        primary: '#713200',
        secondary: '#FFFAEE',
      }
    });
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
    toast.success('To do Updated', {
      style: {
        border: '1px solid #713200',
        padding: '16px',
        color: '#713200',
      },
      iconTheme: {
        primary: '#713200',
        secondary: '#FFFAEE',
      }
    });
  }


  return (
    <div className="container">

      <div className="header">
        <h1>My Todo List Start</h1>
        <Button label="All" onClick={() => { }} primary size="medium" />
        <Button label="Incomplete" onClick={() => { }} primary size="medium" />
        <Button label="Completed" onClick={() => { }} primary size="medium" />
      </div>

      <NewTodoForm onSubmit={addTodos} />
      <br />
      <br />

      <TodoList deleteTodo={deleteTodo} todos={todos} toggleTodo={toggleTodo} updateTodo={updateTodo} />
    </div>
  )
}

export default App
