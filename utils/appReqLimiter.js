const rateLimit = require('express-rate-limit');

const apiLimiter = rateLimit({
    // 15 minutes
    max: 10, 
    message:
    'Too many accounts created from this IP, please try again after an hour',
    windowMs: 15 * 60 * 1000
});

module.exports = (app) => {
    app.use(apiLimiter);
};