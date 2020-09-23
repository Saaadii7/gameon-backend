const passport = require('passport');
const userService = require('./user');
const models = require('../models');

module.exports = {
    login: async (req, res, next) => {
        return await new Promise((resolve, reject) => {
            passport.authenticate('local', { session: false },
                async (err, user) => {
                    if (err)
                        return reject(new Error(err));
                    
                    resolve({
                        token: user.generateJWT(),
                        user
                    });
                })(req, res, next);
        });
    },
    signup: async (userData) => {
        const player = await models.role.player();

        userData.roleId = player.dataValues.id;

        return await userService.create(userData);
    }
};
