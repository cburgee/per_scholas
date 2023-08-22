// Require modules
// const express = require('express');

// Create the Express app
// const app = express();

// Configure the app (app.set)

// Mount middleware (app.use)

// Mount routes
// app.get('/', function(req, res) {
//   	res.send('<h1>Hello World!</h1>');
// });

// Tell the app to listen on port 3000
// app.listen(3000, function() {
//  console.log('Listening on port 3000');
// });

// import the express package
const express = require("express")

// create an instance of express
const app = express()
const port = 3000
const hostname = "127.0.0.1"

// create a new route
app.get("/", function (req, res) {
  console.log(req.method)
  res.send("<h1>Hello world</h1>")
})

app.get("/home", function (req, res) {
  res.send("<h1>Home Page</h1>")
})

app.listen(port, function () {
  console.log(`Server is running on port ${port}`)
})
