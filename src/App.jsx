import React, { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast'
import './App.scss'
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/Error/ErrorBoundaries';
const TodoList = lazy(() => import('./components/TodoList'));


function App() {

  return (
    <div className="container">
      <div className="header">
        <h1>Prodapt Todo List App</h1>
      </div>

      <div className='page' data-cy='page'>
        <div className="content">

          <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => { }}>
            <Suspense fallback={<div>Loading...</div>}>
              <TodoList />
            </Suspense>
          </ErrorBoundary>
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
