const React = require("react")

function Show({ pokemon }) {
  return (
    <main>
      <h1>Gotta Catch 'Em All</h1>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.img + ".jpg"}></img>
      <a href="/pokemon">Back</a>
    </main>
  )
}

module.exports = Show
