const React = require("react")

function Index({ pokemon }) {
  return (
    <main>
      <h1>See all the pokemon!</h1>
      <nav>
        <a href="/pokemon/new">Create a new Pokemon</a>
      </nav>
      <br />
      <ul>
        {pokemon.map(function (pkmon, index) {
          console.log(pkmon)
          return (
            <li>
              <a href={`/pokemon/${index}`}>
                {pkmon.name.charAt(0).toUpperCase() + pkmon.name.slice(1)}
              </a>
            </li>
          )
        })}
      </ul>
    </main>
  )
}

module.exports = Index

// pokemon.map(function (item) {
//   return (
//     <div>
//       <a href={`/pokemon/${item._id}`}>{item.name}</a>
//     </div>
//   )
// })
