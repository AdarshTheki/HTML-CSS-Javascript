const connectToDB = require('./config/db');
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
// This is middleware to parse the body of the request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDB(); // Routes

app.use('/', userRoutes);

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

app.get('/youtube', (req, res) => {
  res.json({
    success: true,
    message: 'Youtube API',
  });
});

module.exports = app;
