const express = require('express');
const router = express.Router();
const login = require('../controller/login');
const registration = require('../controller/registration');

router.get('/', function (req, res, next) {
    login(req, res, next);
});

router.post('/', function (req, res, next) {
    registration(req, res, next);
});

module.exports = router;
