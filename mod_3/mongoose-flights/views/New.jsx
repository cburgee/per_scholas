const React = require("react")

function New() {
  return (
    <div>
      <a href="/flights">Flight List</a>
      <h2>Create a New Flight</h2>
      <form action="/api/flights" method="POST">
        Airline: <input type="text" name="airline" required />
        FlightNo.: <input type="number" name="flightNo" required />
        Date: <input type="date" name="date" required />
        Airport:{" "}
        <select name="airport">
          <option value="AUS">AUS</option>
          <option value="DAL">DAL</option>
          <option value="LAX">LAX</option>
          <option value="SAN">SAN</option>
          <option value="SEA">SEA</option>
        </select>
        <input type="submit" value="Create Flight" />
      </form>
    </div>
  )
}

module.exports = New

"AUS", "DAL", "LAX", "SAN", "SEA"

{
  /* <input type="number" name="FlightNo" required />
        <input type="text" name="date" /> */
}
{
  /* Airport: <input type="text" name="airport" /> */
}
