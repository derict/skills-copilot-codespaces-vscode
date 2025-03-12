// Create web server with Express.js
// http://expressjs.com/en/starter/hello-world.html
// https://expressjs.com/en/guide/routing.html

// Import the express module
const express = require('express');
// Create an express application
const app = express();
// Set the port number
const port = 3000;

// Import the comments module
const comments = require('./comments');

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set the path to the public directory
app.use(express.static('public'));

// Set the path to the comments directory
app.use('/comments', comments);

// Set the path to the root directory
app.get('/', (req, res) => {
  res.render('index');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});