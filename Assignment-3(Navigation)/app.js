const path = require('path');
const express = require('express');

const app = express();

const userRoutes = require('./routes/index');

app.use(express.static(path.join(__dirname, 'public')));

app.use(userRoutes);


app.listen(3001);