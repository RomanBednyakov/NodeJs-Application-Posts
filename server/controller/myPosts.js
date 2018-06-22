const sequelize = require('../sequelize/index');
module.exports = async function (req, res, next) {
    try {
        let posts = await sequelize.query(`SELECT users.name, posts.content, posts.date, posts,title FROM users RIGHT JOIN posts ON users.id='${req.body.userId}' WHERE posts.user_id='${req.body.userId}'`,{type: sequelize.QueryTypes.SELECT});
        posts.forEach((item) => {
            delete item.posts;
        });
        res.json({posts});
    } catch(error) {
        next(error);
    }
};