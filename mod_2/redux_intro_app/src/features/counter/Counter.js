import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, increasebyAmount } from "./counterSlice"
import { useState } from "react"
export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(0)
  return (
    <div>
      <h1>Counter</h1>
      <h4>{count}</h4>

      <button onClick={() => dispatch(increment())}>increase</button>
      <button onClick={() => dispatch(decrement())}>decrease</button>
      <br />
      <br />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        onKeyDown={function (e) {
          if (e.key === "Enter") {
            dispatch(increasebyAmount(amount))
          }
        }}
      />
    </div>
  )
}
