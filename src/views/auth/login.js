const userView = require('../users/user');

module.exports = ({user, token}) => {
    return {
        permissions: user.role.permissions,
        role: user.role.name,
        token,
        user: userView({ user })
    };
};
