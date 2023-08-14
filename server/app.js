/* eslint-disable no-console */
require('dotenv').congig();
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// comment out for production
app.use(morgan());

app.use(express.static(path.join(__dirname, '../client/dist')));

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
