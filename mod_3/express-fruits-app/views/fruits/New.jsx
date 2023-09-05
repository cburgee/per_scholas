const React = require("react")
function New() {
  return (
    <main>
      <nav>
        <a href="/">Home</a>
        <br />
        <a href="/fruits">Fruits Index</a>
      </nav>
      <h1>New Page</h1>
      <form action="/fruits" method="POST">
        Name: <input type="text" name="name" />
        <br />
        Color: <input type="text" name="color" />
        <br />
        Is ready to eat?: <input type="checkbox" name="readyToEat" />
        <br />
        <input type="submit" value="Create Fruit" />
      </form>
    </main>
  )
}

module.exports = New
