const httpStatus = require('http-status');
const sportSchema = require('../../jois/sport');
let sportService = require('../../services/sport');

sportService = new sportService();

const mapper = require('../../views/sports/create');
const responseMapper = require('../../utils/responseMapper');

module.exports = async (req, res, next) => {
    try {
        const { error, value } = sportSchema.validate(req.body);

        if (error)
            next(error);
        
        const sport = await sportService.create(value);

        return res.status(httpStatus.CREATED).send(responseMapper(mapper({sport})));
    }
    catch (error) {
        next(error);
    }
};
