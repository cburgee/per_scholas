const React = require("react")
function Index(props) {
  const { flights } = props
  return (
    <ul>
      {flights.map(function (flight) {
        return (
          <li>
            <h3>{flight.airline}</h3>
            <br />
            <h3>{flight.flightNo}</h3>
            <br />
            <h3>{flight.date}</h3>
          </li>
        )
      })}
    </ul>
  )
}

module.exports = Index
