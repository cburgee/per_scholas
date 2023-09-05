const React = require("react")
function Show(props) {
  const { fruits } = props
  return (
    <main>
      <h1>Show Page</h1>
      The {fruits.name} is {fruits.color}
      {fruits.ReadyToEat
        ? " It's ready to eat!"
        : " It is not ready to eat...Can't touch this"}
    </main>
  )
}

module.exports = Show
