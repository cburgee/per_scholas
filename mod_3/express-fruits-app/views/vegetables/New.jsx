const React = require("react")
function NewVegetable() {
  return (
    <main>
      <nav>
        <a href="/">Home</a>
        <br />
        <a href="/vegetables">Fruits Index</a>
      </nav>
      <h1>New Page</h1>
      <form action="/vegetables" method="POST">
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

module.exports = NewVegetable
