const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const passport = require('./server/passportJs/index').passportJs;

app.use('/login', express.static('view/login'));
app.use('/registration', express.static('view/registration'));
app.use('/', express.static('view/home'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

module.exports = app;