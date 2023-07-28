function Todo(props) {
  const { todo, completeTodo } = props
  return (
    <div>
      <li>{todo.text}</li>
      <label>
        Complete
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => completeTodo(todo.id)}
        />
      </label>
    </div>
  )
}

export default Todo
