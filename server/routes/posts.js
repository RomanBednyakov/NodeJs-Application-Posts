const express = require('express');
const router = express.Router();
const addPost = require('../controller/addPost');
const myPost = require('../controller/myPosts');
const friendsPosts = require('../controller/friendsPosts');

router.post('/addPost', function (req, res, next) {
    addPost(req, res, next);
});
router.get('/myPost', function (req, res, next) {
    myPost(req, res, next);
});
router.get('/friendsPost', function (req, res, next) {
    friendsPosts(req, res, next);
});


module.exports = router;