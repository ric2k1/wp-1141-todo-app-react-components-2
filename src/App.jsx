import { useRef } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {
  const todoListRef = useRef()

  const handleAddTodo = (newTodoItem) => {
    if (todoListRef.current) {
      todoListRef.current.addTodo(newTodoItem)
    }
  }

  return (
    <div className="container">
      <h1 className="title">todo list</h1>

      <AddTodo onAddTodo={handleAddTodo} />

      <TodoList ref={todoListRef} />
    </div>
  )
}

export default App