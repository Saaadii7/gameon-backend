const httpStatus = require('http-status');
const authService = require('../../services/auth');
const mapper = require('../../views/auth/login');

const responseMapper = require('../../utils/responseMapper');

module.exports = async (req, res, next) => {
    try {
        const { user, token } = await authService.login(req, res, next);

        return res.status(httpStatus.OK).json(responseMapper(mapper({
            token,
            user
        })));
    }
    catch (error) {
        next(error);
    }
};