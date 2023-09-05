/* eslint-disable no-console */
require('dotenv').config();
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// comment out for production
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../client/dist')));

const port = process.env.PORT || 8080;

if (!module.parent) {
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
}

module.exports = app;
