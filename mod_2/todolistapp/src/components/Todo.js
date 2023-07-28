import { useState } from "react"
function Todo(props) {
  const { todo, completeTodo, editTodoText, deleteTodo } = props
  const [showInput, setShowInput] = useState(false)
  return (
    <div>
      <li onClick={() => setShowInput(!showInput)}>{todo.text}</li>
      <input
        type="text"
        placeholder="New text..."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            editTodoText(todo.id, e)
            setShowInput(false)
          }
        }}
        style={{ display: showInput ? "block" : "none" }}
      />
      <label>
        Complete
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => completeTodo(todo.id)}
        />
      </label>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  )
}

export default Todo
