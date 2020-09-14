require('dotenv').config();

const fs = require('fs');
const path = require('path');

const ENV = process.env.NODE_ENV || 'development';
const envConfig = require(path.join(__dirname, 'environment'));

const dbConfig = loadDbConfig();

const config = Object.assign(
    {
        [ENV]: true,
        env: ENV,
        db: dbConfig
    },
    envConfig
);
module.exports = config;

function loadDbConfig() {
    if (process.env.DB_URL) {
        return process.env.DB_URL;
    }

    if (fs.existsSync(path.join(__dirname, './database.js'))) {
        return require('./database')[ENV];
    }
}
