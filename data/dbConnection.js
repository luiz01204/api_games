const sequelize = require("sequelize");
require('dotenv').config();

const connection = new sequelize("process.env.DB_NAME","process.env.DB_USER","process.env.DB_PASS",{
    host: "localhost",
    dialect: "mysql",
    timezonetimezone: "-03:00"
});

module.exports = connection;
