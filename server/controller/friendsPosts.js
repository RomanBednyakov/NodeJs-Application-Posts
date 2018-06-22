const sequelize = require('../sequelize/index');

module.exports = async function (req, res, next) {
    try {
        let posts = await sequelize.query(`SELECT users.name, posts.content, posts.date, posts.title FROM users RIGHT JOIN posts ON users.id::varchar = posts.user_id WHERE posts.user_id IN (SELECT following FROM followers WHERE follower::varchar=${req.body.userId}::varchar)`, {type: sequelize.QueryTypes.SELECT});
        if (posts.length > 0) {
            res.json({posts});
        } else {
            res.json({message: 'There is no post'})
        }
    } catch(error){
        next(error);
    }
};