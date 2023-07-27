import "./App.css"
import Counter from "../"

function App() {
  return (
    <div className="App">
      <h1>Header 1</h1>

      <ComponentOne />
      <ComponentTwo />
      <ComponentThree />
      <ComponentFour />
    </div>
  )
}

function ComponentOne() {
  return <h2>Component 1</h2>
}

function ComponentTwo() {
  return <h3>Component 2</h3>
}

function ComponentThree() {
  return <h4>Component 3</h4>
}

function ComponentFour() {
  return <h5>Component 4</h5>
}

export default App
