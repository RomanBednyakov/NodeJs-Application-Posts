const config = {
    port: process.env.PORT || 3000,
    dbName: process.env.DB_NAME || 'app',
    dbUser: process.env.DB_User || 'nodejs',
    dbUserPass: process.env.DB_UserPass || 'restart',
    dbPort: process.env.DB_Port || 5432,
    dbHost: process.env.DB_Host || 'localhost',
    dbDialect: process.env.DB_Dialect || 'postgres',
    secretOrKey: process.env.Secret_Key || 'bla',
};
module.exports = config;