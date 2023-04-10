const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// use body-parser middleware to handle form data
app.use(bodyParser.urlencoded({ extended: true }));

// serve registration page
app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/register.html');
});

// handle registration form submission
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  // save username and password to database or file
  res.send(`Successfully registered ${username}`);
});

// serve login page
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

// handle login form submission
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // check username and password against database or file
  if (username === 'example' && password === 'password') {
    res.send(`Welcome back ${username}`);
  } else {
    res.send('Invalid username or password');
  }
});

// start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});