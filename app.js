'use strict';

const express = require('express');
const passport = require('passport');
const oauth2orize = require('oauth2orize');
const bodyParser = require('body-parser');
const crypto = require('crypto'); 
const uuidv1 = require('uuid/v1');

const app = express();
const server = oauth2orize.createServer();

const checkAuth = require('./middlewares/checkAuth');
const PORT = process.env.PORT || 8001;

// Models
const User = require('./models/User');
const Token = require('./models/Token');
const Client = require('./models/Client');

require('./strategies/passportStrategies');

app.use(bodyParser.json()); 

const encToken = (text) => {
    const encrypted = crypto
        .createHash('sha1')
        .update(text)
        .digest('hex');
    return encrypted;
}

// Create token
const passwordToken = async(client, username, password, scope, done) => {
    /* 1. Cek data user >> username & password */
    /* 2. Cek data token >> client & username/id */
    /*  - Jika ada update token yg belum diencrypt di table access_token */
    /*  - Jika tidak buat token yg belum diencrypt di table access_token */
    /* 3. Kirim token yg sudah dihash ke user */

    const userData = await User.findOne({
        where: {
            username,
            password,
        },
    });

    if(!userData) {
        return done(null, false);
    }
    
    const tokenData = await Token.findOne({
        where: {
            client: client.id,
            user: userData.id,
        },
    });

    const newToken = uuidv1();

    if(!tokenData) {
        const createTokenData = {
            hash: encToken(newToken),
            client: client.id,
            user: userData.id,
        }
        await Token.create(createTokenData);
    } else {
        tokenData.hash = encToken(newToken);
        await tokenData.save();
    }
    
    return done(null, newToken);
};
server.exchange(oauth2orize.exchange.password(passwordToken));

app.get('/user', checkAuth.token, (req, res, next) => {
    res.json(req.user);
});

app.post('/login',
    checkAuth.basic, 
    server.token(), 
    server.errorHandler()
);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});