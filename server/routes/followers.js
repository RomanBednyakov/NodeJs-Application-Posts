const express = require('express');
const router = express.Router();
const addFollowers = require('../controller/addFollowers');
const removeFollowers = require('../controller/removeFollowers');

router.post('/', function (req, res, next) {
    addFollowers(req, res, next);
});
router.delete('/', function (req, res, next) {
    removeFollowers(req, res, next);
});

module.exports = router;
