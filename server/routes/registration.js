let express = require('express');
const router = express.Router();
const registration = require('../controller/registration');

router.post('/', function (req, res) {
    registration(req, res);
});

module.exports = router;