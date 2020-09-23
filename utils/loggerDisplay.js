const logger = require('morgan');

logger.token('host', function(req) {
    return req.hostname;
});

module.exports = (app) => {
    app.use(logger(':method :host :url :status :res[content-length] - :response-time ms'));
};