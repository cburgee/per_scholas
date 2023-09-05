const React = require("react")
function IndexVegetables(props) {
  const { vegetables } = props

  return (
    <main>
      <nav>
        <a href="/">Home</a>
        <br />
        <a href="/vegetables/new">Create a Vegetable</a>
      </nav>
      <h1>Index Page</h1>
      <ul>
        {vegetables.map(function (vegetable, i) {
          return (
            <li>
              The <a href={`/vegetables/${i}`}>{vegetable.name}</a> is{" "}
              {vegetable.color}
              <br />
              {vegetable.readyToEat
                ? "It is ready to eat!"
                : "It is not ready to eat!"}
            </li>
          )
        })}
      </ul>
    </main>
  )
}

module.exports = IndexVegetables
