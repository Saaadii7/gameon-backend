const httpStatus = require('http-status');
let sportService = require('../../services/sport');

sportService = new sportService();

const mapper = require('../../views/sports/all');
const responseMapper = require('../../utils/responseMapper');

module.exports = async (req, res, next) => {
    try {
        const sports = await sportService.findWithAssosiations(
            {},
            false,
            []
        );
        
        return res.status(httpStatus.OK).send(responseMapper(mapper({sports})));
    }
    catch (error) {
        next(error);
    }
};