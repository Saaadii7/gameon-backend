const jwt = require('express-jwt');
const config = require('../../config');

function getTokenFromHeaders(req) {
    const {
        headers: {
            authorization 
        }
    } = req;

    if (
        (authorization && authorization.split(' ')[0] === 'Token') ||
        (authorization && authorization.split(' ')[0] === 'Bearer')
    ) 
        return authorization.split(' ')[1];
    
    return null;
}

const auth = {
    optional: jwt({
        algorithms: [ 'HS256' ],
        credentialsRequired: false,
        getToken: getTokenFromHeaders,
        secret: config.web.secret,
        userProperty: 'payload'
    }),
    required: jwt({
        algorithms: [ 'HS256' ],
        getToken: getTokenFromHeaders,
        secret: config.web.secret,
        userProperty: 'payload'
    })
};

module.exports = auth;
