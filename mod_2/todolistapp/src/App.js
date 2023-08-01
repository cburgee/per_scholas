import { useEffect, useState } from "react"
import TodoList from "./components/TodoList"
import "./App.css"
import todosData from "./data/todosData"

function App() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos")

    if (savedTodos) {
      setTodos(JSON.parse(savedTodos))
    }
  }, [])

  const addTodo = (e) => {
    const newTodo = {
      id: new Date(),
      text: e.target.value,
      completed: false,
    }
    setTodos([...todos, newTodo])
    e.target.value = ""
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]))
  }

  const completeTodo = (id) => {
    const todosCopy = [...todos]
    const indexOfTodo = todosCopy.findIndex((item) => item.id === id)
    todosCopy[indexOfTodo].completed = !todosCopy[indexOfTodo].completed
    setTodos([...todosCopy])
    localStorage.setItem("todos", JSON.stringify([...todos]))
  }

  const editTodoText = (id, e) => {
    const todosCopy = [...todos]
    const indexOfTodo = todosCopy.findIndex((item) => item.id === id)
    todosCopy[indexOfTodo].text = e.target.value
    todosCopy[indexOfTodo].text = e.target.value
    setTodos([...todosCopy])
    localStorage.setItem("todos", JSON.stringify([...todos]))
  }

  const deleteTodo = (id) => {
    const todosCopy = [...todos]
    const indexOfTodo = todosCopy.findIndex((item) => item.id === id)
    todosCopy.splice(indexOfTodo, 1)
    setTodos([...todosCopy])
    localStorage.setItem("todos", JSON.stringify([...todos]))
  }
  return (
    <div className="App">
      <h1>Todos App</h1>
      <TodoList
        todos={todos}
        addTodo={addTodo}
        completeTodo={completeTodo}
        editTodoText={editTodoText}
        deleteTodo={deleteTodo}
      />
    </div>
  )
}

export default App
