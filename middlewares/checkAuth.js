'use strict';

const passport = require('passport');

module.exports = {
    basic: passport.authenticate('basic', { session: false }),
    token: passport.authenticate('token', { session: false }),
};