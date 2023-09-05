const React = require("react")
function New() {
  return (
    <main>
      <h1>Create a new Pokemon</h1>
      <form action="/pokemon" method="POST">
        Name: <input type="text" name="name" />
        <br />
        Image: <input type="text" name="img" />
        <input type="submit" value="Create Fruit" />
      </form>
    </main>
  )
}

module.exports = New
