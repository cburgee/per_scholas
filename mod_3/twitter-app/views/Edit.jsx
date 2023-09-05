const React = require("react")

function Edit({ tweet }) {
  return (
    <div>
      <h2>Create a New Tweet</h2>
      <form action={`/api/tweets/${tweet._id}?_method=PUT`} method="POST">
        Title:{" "}
        <input type="text" name="title" defaultValue={tweet.title} required />
        Body:{" "}
        <textarea name="body" defaultValue={tweet.body} required></textarea>
        <input
          type="checkbox"
          name="sponsored"
          defaultChecked={tweet.sponsored}
        />
        <input type="submit" value="Update" />
      </form>
    </div>
  )
}

module.exports = Edit
