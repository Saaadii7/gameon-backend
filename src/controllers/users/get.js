const httpStatus = require('http-status');
let userService = require('../../services/user');

userService = new userService();

const mapper = require('../../views/users/get');
const responseMapper = require('../../utils/responseMapper');

module.exports = async (req, res, next) => {
    try {
        const user = await userService.findWithAssosiations(
            { id: req.params.id },
            true,
            ['favouriteSports']
        );

        if (!user) {
            return res.status(httpStatus.NOT_FOUND).send(responseMapper({
                message: 'User not Found'
            }, false));
        }

        return res.status(httpStatus.OK).send(responseMapper(mapper({user})));
    }
    catch (error) {
        next(error);
    }
};
