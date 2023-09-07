const React = require("react")

function Show({ flight }) {
  return (
    <div>
      <a href="/flights">Flight List</a>
      <div>Airline: {flight.airline}</div>
      <div>Flight #: {flight.flightNo}</div>
      <div>Airport: {flight.airport}</div>
      <div>Departure Date: {flight.date}</div>
      <div>Destinations:</div>

      <div>
        {flight.destination.length > 0 &&
          flight.destination.map(function (destination) {
            return (
              <div>
                <div>{destination.airport}</div>
                <div>{destination.arrival}</div>
              </div>
            )
          })}
      </div>

      <div>Add a destination:</div>
      <form
        method="POST"
        action={`/api/flights/add-destination/${flight._id}?_method=PUT`}
      >
        <select name="airport">
          <option value="AUS">AUS</option>
          <option value="DAL">DAL</option>
          <option value="LAX">LAX</option>
          <option value="SAN">SAN</option>
          <option value="SEA">SEA</option>
        </select>
        Arrival Date: <input type="date" name="arrival" required />
        <input type="submit" value="Add Destination" />
      </form>
    </div>
  )
}

module.exports = Show
