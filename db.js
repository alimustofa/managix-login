const Sequelize = require('sequelize');

const sequelize = new Sequelize('managix', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});

module.exports = sequelize;