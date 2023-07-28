import Todo from "./Todo"

function TodoList(props) {
  const { todos, addTodo, completeTodo, editTodoText, deleteTodo } = props
  return (
    <div>
      <h1>Create Todo</h1>
      <input
        type="text"
        placeholder="Todo..."
        onKeyDown={(e) => e.key === "Enter" && addTodo(e)}
      />
      {todos.length ? (
        <>
          <h2>Todos Items</h2>
          <ul>
            {todos
              .filter((item) => !item.completed)
              .map((todo) => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  completeTodo={completeTodo}
                  editTodoText={editTodoText}
                  deleteTodo={deleteTodo}
                />
              ))}
          </ul>
          <h2>Completed Todos</h2>
          <ul>
            {todos
              .filter((item) => item.completed)
              .map((todo) => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  completeTodo={completeTodo}
                  editTodoText={editTodoText}
                  deleteTodo={deleteTodo}
                />
              ))}
          </ul>
        </>
      ) : (
        <h2>No Todos</h2>
      )}
    </div>
  )
}

export default TodoList
