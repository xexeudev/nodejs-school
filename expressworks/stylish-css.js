var express = require('express')
var stylus = require('stylus')
var path = require('path')

var app = express()

// Set the path to the folder containing the stylesheets
var stylesheetsPath = path.join('https://github.com/stylus/stylus', process.argv[3])

// Use the Stylus middleware to generate CSS from Stylus files
app.use(require('stylus').middleware(process.argv[3]))

// Serve static files from the same directory as index.html
app.use(express.static(process.argv[3]))

// Set up a route to serve the index.html file
app.get('/', function(req, res) {
  res.sendFile(path.join(stylesheetsPath, 'index.html'))
})

// Start the server
app.listen(process.argv[2], function() {
  console.log(`Server listening on port ${process.argv[2]}`)
})