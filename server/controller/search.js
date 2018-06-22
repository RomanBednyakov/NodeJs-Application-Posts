const sequelize = require('../sequelize/index');

module.exports = async function (req, res, next) {
    try {
        let users = await sequelize.query(`SELECT name, id FROM users WHERE name LIKE :search AND NOT id = :id`, {replacements: {search : `${req.headers.text}%`, id: req.body.userId}, type: sequelize.QueryTypes.SELECT});
        if (users.length > 0) {
            let friends = await sequelize.query(`SELECT following FROM followers WHERE follower ='${req.body.userId}'`, {type: sequelize.QueryTypes.SELECT});
            await friends.forEach((item) => {
                users.forEach((users) => {
                    if (String(item.following) ===String(users.id)) {
                        users.following = item.following;
                    }
                });
            });
            await res.json({users});
        } else {
            res.json({message:"Users is not found"});
        }
    } catch(error) {
        next(error);
    }
}