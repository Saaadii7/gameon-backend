const LocalStrategy = require('passport-local').Strategy;
const userService = require('../services/user');

module.exports = (passport) => {
    passport.use(
        new LocalStrategy(
            {
                passReqToCallback: false,
                passwordField: 'password',
                session: true,
                usernameField: 'email'
            },
            async (email, password, done) => {
                const user = await userService.findWithAssosiations({
                    email: email.toLowerCase()
                }, true, ['role']).catch(done);

                if (!user)
                    return done('User Not Found', false);

                if (!(await user.authenticate(password)))
                    return done('Email or Password is incorrect.', false);

                return done(null, user);
            }
        )
    );
    passport.serializeUser(function(user, done) {
        done(null, user);
    });
    passport.deserializeUser(function(user, done) {
        done(null, user);
    });
};
