const statusMonitor = require('express-status-monitor');
const config = require('../config');

module.exports = (app) => {
    if (config.env === 'development')
        app.use(statusMonitor());
};