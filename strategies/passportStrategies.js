'use strict';

const passport = require('passport');
const crypto = require('crypto');
const Basic = require('passport-http').BasicStrategy;
const Bearer = require('passport-http-bearer').Strategy;

const Client = require('../models/Client');
const Token = require('../models/Token');
const User = require('../models/User');

// Cek client
passport.use('basic', new Basic(async (clientId, clientSecret, done) => {
    /* 1. Cek data Client */
    const clientData = await Client.findOne({
        where: {
            client_id: clientId,
            client_secret: clientSecret,
        },
    });

    if (!clientData) {
        return done(null, false);
    }

    return done(null, clientData);
}));

// Cek token
passport.use('token', new Bearer(async (accessToken, done) => {
    /* 1. Decrypt token */
    const accessTokenHash = crypto
        .createHash('sha1')
        .update(accessToken)
        .digest('hex');

    /* 2. Cek data Token */
    const tokenData = await Token.findOne({
        where: {
            hash: accessTokenHash,
        },
    });

    if (!tokenData) {
        return done(null, false);
    }

    const userData = await User.findOne({
        where: {
            id: tokenData.user,
        },
    });

    return done(null, userData);
}));
