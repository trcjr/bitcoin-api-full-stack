'use strict';

const {
    constants: {
        exchanges
    }
} = require( '@npm.m.stecky.efantis/common-exchange' );

const oneDay = 24 * 60 * 60 * 1000;


module.exports = Object.freeze({

    loginTokens: {

        expiryTime: oneDay,
        numberOfAllowedSignedInLoginTokens: 5,
    },

    headers: {

        loginToken: 'login-token',
        userId: 'user-id',
    },

    javascript: {

        styleSpacer: '__style__',
    },

    urls: {

        exchangeUrl: process.env.EXCHANGE_URL,
    },

    exchanges,
});