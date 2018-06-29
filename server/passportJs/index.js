const sequelize = require('../sequelize/index');
const passport = require('passport');
const passportJWT = require("passport-jwt");
const config = require('../config/index');
const jwt = require('jsonwebtoken');

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

const authUser = function (req, res, next) {
  const auth = req.get('Authorization');
    if(auth) {
      const token = req.headers.authorization;
      jwt.verify(token.slice(1, -1), config.secretOrKey, (err,decoded) => {
            if(isNaN(err)) {
                res.status(401).json({message:"token not verify"});
            }
            if(decoded.user !== undefined) {
                req.body.userId = decoded.user;
                next();
            }
        });
    }
    else {
        next();
    }
};

let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = config.secretOrKey;
const strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
    sequelize.query(`SELECT id, name, email, avatar FROM users WHERE id = '${jwt_payload.user}'`, {type: sequelize.QueryTypes.SELECT})
        .then((users) => {
            let user = users[0];
            if (user) {
                next(null, user);
            } else {
                next(null, false);
            }
        });
});

passport.use(strategy);

const passportJs = {
    passportJs : passport,
    jwtOptions,
    authUser
};

module.exports = passportJs;
