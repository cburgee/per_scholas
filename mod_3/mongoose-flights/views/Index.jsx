const React = require("react")
function Index(props) {
  const { flights } = props
  return (
    <ul>
      <a href="/flights/new">Create a new flight</a>
      {flights.map(function (flight) {
        return (
          <li key={flight._id}>
            <h3>Airline: {flight.airline}</h3>
            <br />
            <h3>Flight #: {flight.flightNo}</h3>
            <br />
            <h3>Flight Departure Date: {flight.date}</h3>
            <a href={`/flights/${flight._id}`}>
              <button>Details</button>
            </a>
            <form
              action={`/api/flights/${flight._id}?_method=DELETE`}
              method="POST"
            >
              <input type="submit" value="Delete"></input>
            </form>
          </li>
        )
      })}
    </ul>
  )
}

module.exports = Index
