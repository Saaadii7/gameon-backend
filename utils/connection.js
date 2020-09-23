const path = require('path');
const Sequelize = require('sequelize');

const config = require(path.join(__dirname, '../config'));

const sequelize = new Sequelize(config.db);

sequelize
    .authenticate()
    .then(_err => {
        console.log(`Connection has been established successfully. ${_err}`);
    })
    .catch(err => {
        console.log('Unable to connect to the database:', err);
    });

module.exports = sequelize;
