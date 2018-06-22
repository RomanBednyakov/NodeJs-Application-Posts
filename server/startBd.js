const sequelize = require('sequelize/index');

module.exports = async function (req, res, next) {
    try {
        sequelize.query("CREATE TABLE IF NOT EXISTS users (id serial PRIMARY KEY, name text, email text, password text, avatar text);");
        sequelize.query("CREATE TABLE IF NOT EXISTS Followers (id serial PRIMARY KEY, follower text, following text);");
        sequelize.query("CREATE TABLE IF NOT EXISTS posts (id serial PRIMARY KEY, content text, date text, title text, user_id text);");
        next();
    } catch(error){
        next(error);
    }
};