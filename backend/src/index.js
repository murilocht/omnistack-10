const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const config = require('./config');

const app = express();

mongoose.connect(config, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3333);