import TodoItem from './TodoItem'

const TodoList = ({ todos, onDelete, onToggle, onToggleDescription }) => {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <div key={todo.id}>
          <TodoItem
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
            onToggleDescription={onToggleDescription}
          />
          {index < todos.length - 1 && <div className="separator" />}
        </div>
      ))}
    </div>
  )
}

export default TodoList
