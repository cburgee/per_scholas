// import the http module from node
const http = require("http")
const hostname = "127.0.0.1"
const port = 3000
const server = http.createServer(function (req, res) {
  console.log(req.url)
  console.log(req.method)
  res.statusCode = 200
  res.setHeader("Content-Type", "application/json")
  res.end("Nodejs Demo Intro")
})

// set the server to listen for requests on port 3000
server.listen(port, hostname, function () {
  console.log(`Server is running on port ${port}`)
})
