const express = require('express');
const logger = require('morgan');
// const webpack = require('webpack');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
// const config = require('./webpack.config.js');

// Set up the express app
const port = parseInt(process.env.PORT, 10) || 8000;
const app = express();
// const compiler = webpack(config);
app.set('port', port);
// Log requests to the console.
app.use(logger('dev'));
app.use(cors());

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./server/routes/route')(app);

app.listen(port);
module.exports = app;