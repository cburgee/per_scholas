import { useSelector } from "react-redux"

export default function TodoList() {
  const todosList = useSelector((state) => state.todos)
  return todosList.map((todo) => (
    <div>
      <h3>{todo.text}</h3>
    </div>
  ))
}
