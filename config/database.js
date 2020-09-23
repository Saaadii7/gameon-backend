require('dotenv').config();

module.exports = {
    development: {
        database: process.env.DB_NAME,
        dialect: 'postgres',
        host: process.env.DB_HOST,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        username: process.env.DB_USERNAME
    },
    docker: {
        database: process.env.DB_NAME,
        dialect: 'postgres',
        host: process.env.DB_HOST,
        logging: null,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        username: process.env.DB_USERNAME
    },
    production: process.env.DB_URL,
    test: {
        database: process.env.DB_NAME,
        dialect: 'postgres',
        host: process.env.DB_HOST,
        logging: null,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        username: process.env.DB_USERNAME
    }
};
