'use strict';

const Sequelize = require(`sequelize`);
const sequelize = require(`../db`);

const Client = sequelize.define(`client`, {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
    },
    client_id: Sequelize.STRING,
    client_secret: Sequelize.STRING,
    description: Sequelize.STRING,
}, {
    tableName: `oauthClients`,
    timestamps: false,
});

module.exports = Client;
