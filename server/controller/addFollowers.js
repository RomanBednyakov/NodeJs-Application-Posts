const sequelize = require('../sequelize/index');

module.exports = async function (req, res, next) {
    try {
        await sequelize.query(`INSERT INTO followers (follower, following) VALUES (:follower, :following)`, {replacements: {follower: req.body.userId, following: req.body.followingId}});
        res.json("Success!");
    } catch(error) {
        next(error);
    }
};