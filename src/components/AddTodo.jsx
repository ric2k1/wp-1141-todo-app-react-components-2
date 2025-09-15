import { useState } from 'react'

const AddTodo = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState('')
  const [description, setDescription] = useState('')

  const handleAddTodo = () => {
    const text = newTodo.trim()
    const desc = description.trim()
    
    if (!text) return
    
    const newTodoItem = {
      id: Date.now(), // 使用時間戳作為 ID
      text: text,
      description: desc || "No description provided",
      completed: false,
      expanded: false
    }
    
    onAddTodo(newTodoItem)
    setNewTodo('')
    setDescription('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo()
    }
  }

  const handleDescriptionKeyDown = (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      handleAddTodo()
    }
  }

  return (
    <div className="add-todo-section">
      <div className="input-group">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="new todo"
          className="todo-input"
        />
        <button onClick={handleAddTodo} className="add-btn">add</button>
      </div>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        onKeyDown={handleDescriptionKeyDown}
        placeholder="description"
        className="description-input"
      />
    </div>
  )
}

export default AddTodo
