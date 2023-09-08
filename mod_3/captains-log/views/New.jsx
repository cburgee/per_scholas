const React = require("react")

function New() {
  return (
    <div>
      <form action="/api/logs" method="POST">
        Title: <input type="text" name="title" required />
        Entry: <textarea name="entry" required></textarea>
        Ship Broken?:
        <input type="checkbox" name="shipIsBroken" required />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

module.exports = New
