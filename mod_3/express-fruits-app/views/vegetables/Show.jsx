const React = require("react")
function ShowVegetable(props) {
  const { vegetables } = props
  console.log(vegetables)
  return (
    <main>
      <h1>Show Page</h1>
      The {vegetables.name} is {vegetables.color}
      {vegetables.ReadyToEat
        ? " It's ready to eat!"
        : " It is not ready to eat...Can't touch this"}
    </main>
  )
}

module.exports = ShowVegetable
