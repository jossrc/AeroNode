const express = require('express');
const app = express();

// Routes
app.use('/api/vuelos',require('./flight'))

module.exports = app;
