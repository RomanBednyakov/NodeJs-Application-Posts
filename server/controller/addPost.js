const sequelize = require('../sequelize/index');
module.exports = async function savePost(req, res, next) {
    try {
        await sequelize.query(`INSERT INTO posts (content, date, title, user_id) VALUES ('${req.body.content}', '${req.body.date}', '${req.body.title}', '${req.body.userId}')`, {type: sequelize.QueryTypes.INSERT});
        res.json({message: "Post successfully saved!"})
    } catch(error) {
        next(error);
    }
};