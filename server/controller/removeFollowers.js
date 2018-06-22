const sequelize = require('../sequelize/index');

module.exports = async function (req, res, next) {
    try {
        await sequelize.query(`DELETE FROM followers WHERE follower='${req.body.userId}' AND following='${req.body.followingId}'`, {type: sequelize.QueryTypes.DELETE});
        res.json("Success!");
    } catch(error) {
        next(error);
    }
};