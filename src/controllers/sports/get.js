const httpStatus = require('http-status');
let sportService = require('../../services/sport');

sportService = new sportService();

const mapper = require('../../views/sports/get');
const responseMapper = require('../../utils/responseMapper');

module.exports = async (req, res, next) => {
    try {
        const sport = await sportService.findWithAssosiations(
            { id: req.params.id },
            true,
            ['followers']
        );

        return res.status(httpStatus.OK).send(responseMapper(mapper({sport})));
    }
    catch (error) {
        next(error);
    }
};
