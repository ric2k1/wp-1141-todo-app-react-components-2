const TodoItem = ({ todo, onToggle, onDelete, onToggleDescription }) => {
  const handleItemClick = (e) => {
    if (e.target.type !== 'checkbox' && !e.target.classList.contains('delete-btn')) {
      onToggleDescription(todo.id)
    }
  }

  const handleDeleteClick = (e) => {
    e.stopPropagation()
    onDelete(todo.id)
  }

  return (
    <div>
      <div 
        className="todo-item"
        onClick={handleItemClick}
      >
        <input
          type="checkbox"
          className="todo-checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span className="todo-text">{todo.text}</span>
        <button 
          className="delete-btn"
          onClick={handleDeleteClick}
        >
          delete
        </button>
      </div>
      {todo.expanded && (
        <div className="todo-description show">
          {todo.description}
        </div>
      )}
    </div>
  )
}

export default TodoItem
