const React = require("react")

function Index({ logs }) {
  return (
    <div>
      <ul>
        {logs.map(function (log) {
          return (
            <li key={log._id}>
              <h2>{log.title}</h2>
              <p>{log.entry}</p>
              <p>{log.shipIsBroken}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

module.exports = Index
