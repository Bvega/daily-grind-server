// Import Express framework and Node path utility
const express = require('express');
const path = require('path');

// Create an Express application
const app = express();
const PORT = 3000;

// Middleware: Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route: Homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route: Contact page
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Route: Our Coffees page
app.get('/our-coffees', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'our-coffees.html'));
});

// Catch-all route for 404 errors
app.use((req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
