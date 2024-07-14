// const express = require('express');
// const app = express();
// const port = 5000;

// // Middleware to parse JSON and URL-encoded bodies
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Set EJS as the view engine
// app.set('view engine', 'ejs');

// // Serve static files from the 'public' folder
// app.use(express.static('public'));

// // Routes
// app.get('/', (req, res) => {
//   res.render('page');
// });

// app.get('/login', (req, res) => {
//   res.render('login');
// });

// app.get('/register', (req, res) => {
//   res.render('register');
// });

// // Handle form submissions for login and register
// app.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   // Handle login logic (authentication)
//   res.send(`Logging in ${username}`);
 

// });

// app.post('/register', (req, res) => {
//   const { username, role } = req.body;
//   // Handle registration logic (create user)
//   res.send(`Registering ${username} , Role: ${role}`);
 
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route to serve login.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'page.html'));
});

// Route to serve login.html
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Route to serve register.html
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

// Handle form submissions for login and register (example)
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Handle login logic (authentication)
  res.send(`Logging in ${username}`);
});

app.post('/register', (req, res) => {
  const { username, role } = req.body;
  // Handle registration logic (create user)
  res.send(`Registering ${username}\n Role: ${role}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
