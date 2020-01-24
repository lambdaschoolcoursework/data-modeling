const express = require('express');
const router = require('../recipes/router');

const app = express();

app.use(express.json());
app.use('/api/recipes', router);

module.exports = app;