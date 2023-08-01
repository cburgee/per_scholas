import logo from "./logo.svg"
import Counter from "./components/counter"
import { useState } from "react"
import "./App.css"

const [countState, setCount] = useState(0)

function App() {
  return (
    <div className="App">
      <Counter countState={countState} />
    </div>
  )
}

export default App
