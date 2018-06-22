let express = require('express');
const router = express.Router();
const passport = require('../passportJs/index').passportJs;
const search = require('../controller/search');

router.get('/auth', passport.authenticate('jwt', { session: false}), function (req, res) {
    res.json({message: "ok", user : req.user});
});

router.get('/search', function (req, res, next) {
    search(req, res, next);
});


module.exports = router;
