function Counter({ count }) {
  const handleIncrement = () => {
    setCount(count + 1)
  }
  const handleDecrement = () => {
    setCount(count - 1)
  }
  return (
    <>
      <span>Current Count: {count}</span>
      <section>
        <button onClick={handleIncrement}>+</button>/
      </section>
    </>
  )
}

export default Counter
