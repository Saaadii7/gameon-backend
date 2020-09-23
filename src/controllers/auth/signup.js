const httpStatus = require('http-status');
const authService = require('../../services/auth');
const userSchema = require('../../jois/user');
const mapper = require('../../views/auth/signup');

module.exports = async (req, res, next) => {
    try {
        const { error, value } = userSchema.validate(req.body);
        
        if (error)
            next(error);
        
        const user = await authService.signup(value);
        
        return res.status(httpStatus.CREATED).send(mapper(user));
    }
    catch (error) {
        next(error);
    }
};