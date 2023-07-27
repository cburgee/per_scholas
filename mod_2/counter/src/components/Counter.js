import { useState } from "react"
import styles from "./counter.module.css"
function Counter(props) {
  const [counter, setCounter] = useState(0)
  const handleClick = function () {
    setCounter(counter + 1)
  }
  // const [user, setUser] = useState("")

  return (
    <div className={styles.container}>
      <h2>{props.title}</h2>
      <h3> {counter}</h3>
      <button onClick={handleClick}>Increase</button>
    </div>
  )
}
export default Counter
