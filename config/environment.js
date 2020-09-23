const path = require('path');
const logPath = path.join(__dirname, '../logs/development.log');

module.exports = {
    logging: {
        appenders: {
            app: {
                filename: logPath,
                type: 'file' 
            },
            out: {
                type: 'console' 
            }
        },
        categories: {
            default: {
                appenders: [ 'out',
                    'app' ],
                level: 'debug' 
            }
        }
    },
    web: {
        port: process.env.SERVER_PORT || '3000',
        secret: process.env.SECRET || 'secret',
        session_expiry: process.env.SESSION_EXPIRY || 300,
        storage_path: process.env.STORAGE_PATH || './uploads'
    }
};
