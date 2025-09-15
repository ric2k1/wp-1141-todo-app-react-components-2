import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "todo 1", description: "This is the description for todo 1", completed: false, expanded: false },
    { id: 2, text: "todo 2", description: "This is the description for todo 2", completed: false, expanded: false }
  ])

  const addTodo = (newTodoItem) => {
    setTodos([...todos, newTodoItem])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const toggleDescription = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, expanded: !todo.expanded } : todo
    ))
  }

  return (
    <div className="container">
      <h1 className="title">todo list</h1>

      <AddTodo onAddTodo={addTodo} />

      <TodoList 
        todos={todos}
        onDelete={deleteTodo}
        onToggle={toggleTodo}
        onToggleDescription={toggleDescription}
      />
    </div>
  )
}

export default App