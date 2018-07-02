const Sequelize = require('sequelize');

const sequelize = new Sequelize('managix', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    operatorsAliases: false,
});

module.exports = sequelize;