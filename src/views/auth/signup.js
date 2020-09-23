const userView = require('../users/user');

module.exports = ({user}) => {
    return userView({ user });
};
