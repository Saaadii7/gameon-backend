const models = require('../models');
const defaultService = require('./default');

class sportService extends defaultService{
    constructor() {
        super(models.sport);
    }
}

module.exports = sportService;
