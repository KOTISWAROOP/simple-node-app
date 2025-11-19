// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello World!!! welcome infoblox');
});

module.exports = app; // Export the app