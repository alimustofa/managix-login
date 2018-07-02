'use strict';

const Sequelize = require(`sequelize`);
const sequelize = require(`../db`);

const Token = sequelize.define(`token`, {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
    },
    hash: Sequelize.STRING,
    client: Sequelize.INTEGER,
    user: Sequelize.INTEGER,
}, {
    tableName: `oauthTokens`,
    timestamps: false,
});

module.exports = Token;
