const userPartial = require('./user');

module.exports = ({user}) => {
    return {
        ...userPartial({
            users: user
        }),
        favouriteSports: user.favouriteSports
    };
};
