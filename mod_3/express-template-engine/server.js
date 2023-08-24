const express = require("express")
const fs = require("fs")

// Create app
const app = express()
const port = 3000

// App config

app.engine("madeline", function (filePath, options, callback) {
  fs.readFile(filePath, function (err, content) {
    if (err) {
      return callback(err)
    }
    const rendered = content
      .toString()
      .replace("#title#", "<title>" + options.title + "</title>")
      .replace("#message#", "<h1>" + options.message + "</h1>")
      .replace("#content#", "<div>" + options.content + "</div>")
    console.log(rendered)
    return callback(null, rendered)
  })
})

app.set("views", "./views")
app.set("view engine", "madeline")

// Routes
app.get("/", function (req, res) {
  res.render("template", {
    title: "Hello world",
    message: "This is the message!",
    content: "This is my content.",
  })
})

app.listen(port, function () {
  console.log(`Server running on port: ${port}`)
})
