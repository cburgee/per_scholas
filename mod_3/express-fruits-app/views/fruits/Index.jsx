const React = require("react")
function Index(props) {
  const { fruits } = props
  return (
    <main>
      <nav>
        <a href="/">Home</a>
        <br />
        <a href="/fruits/new">Create a Fruit</a>
      </nav>
      <h1>Index Page</h1>
      <ul>
        {fruits.map(function (fruit, i) {
          return (
            <li>
              The{" "}
              <a id={fruit._id} href={`/fruits/${fruit._id}`}>
                {fruit.name}
              </a>{" "}
              is {fruit.color}
              <br />
              {fruit.readyToEat
                ? "It is ready to eat!"
                : "It is not ready to eat!"}
            </li>
          )
        })}
      </ul>
    </main>
  )
}

module.exports = Index
