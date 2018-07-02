'use strict';

const Sequelize = require(`sequelize`);
const sequelize = require(`../db`);

const User = sequelize.define(`user`, {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
    },
    username: Sequelize.STRING,
    password: Sequelize.STRING,
}, {
    tableName: `users`,
    timestamps: false,
});

module.exports = User;
