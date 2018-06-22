const sequelize = require('../sequelize/index');
const jwt = require('jsonwebtoken');
const jwtOptions = require('../passportJs/index').jwtOptions;
const passwordHash = require('password-hash');

module.exports = async function (req, res, next) {
    try {
        let users = await sequelize.query(`SELECT * FROM users WHERE name = :name`, {replacements: {name: req.query.name}, type: sequelize.QueryTypes.SELECT});
        if (passwordHash.verify(req.query.password, users[0].password)) {
            let user = users[0];
            let payload = {user: user.id};
            let token = jwt.sign(payload, jwtOptions.secretOrKey, { expiresIn: '100m' });
            res.json({message: "ok", token: token});
        } else {
            res.status(401).json({message:"passwords did not match"});
        }
    } catch(error){
        res.json({message:"This user does not exist"});
        next(error);
    }
};