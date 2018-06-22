const sequelize = require('../sequelize/index');
const passwordHash = require('password-hash');

module.exports = async function (req, res, next) {
    try {
        req.body.password = passwordHash.generate(req.body.password);
        await sequelize.query(`INSERT INTO users (name, email, password, avatar) VALUES ('${req.body.name}', '${req.body.email}', '${req.body.password}', '${req.body.avatar}')`, {type: sequelize.QueryTypes.INSERT});
        res.json({message: 'ok'});
    } catch(error){
        res.json({message:"Server error"});
        next(error);
    }
};