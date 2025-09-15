import { useState, forwardRef, useImperativeHandle } from 'react'
import TodoItem from './TodoItem'

const TodoList = forwardRef((props, ref) => {
  const [todos, setTodos] = useState([
    { id: 1, text: "todo 1", description: "This is the description for todo 1", completed: false, expanded: false },
    { id: 2, text: "todo 2", description: "This is the description for todo 2", completed: false, expanded: false }
  ])

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

  const addTodo = (newTodoItem) => {
    setTodos([...todos, newTodoItem])
  }

  useImperativeHandle(ref, () => ({
    addTodo
  }))

  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <div key={todo.id}>
          <TodoItem
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onToggleDescription={toggleDescription}
          />
          {index < todos.length - 1 && <div className="separator" />}
        </div>
      ))}
    </div>
  )
})

export default TodoList
