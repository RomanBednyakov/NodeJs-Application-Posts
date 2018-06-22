const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const passport = require('./server/passportJs/index').passportJs;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

module.exports = app;
