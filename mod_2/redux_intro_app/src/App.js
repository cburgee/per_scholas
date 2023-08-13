import TodoList from "./components/TodoList"
import "./App.css"
import Counter from "./features/counter/Counter"
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "./features/Todos/TodosSlice"

function App() {
  const todosList = useSelector((state) => state.todos)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Redux Intro App</h1>
      <Counter />
      <hr />
      <input
        type="text"
        placeholder="Todo..."
        onKeyDown={(e) =>
          e.key === "Enter" && dispatch(addTodo(e.target.value))
        }
      />
      <TodoList />
      <button>Button</button>
    </div>
  )
}

export default App
