const models = require('../models');
const defaultService = require('./default');

class userService extends defaultService{
    constructor() {
        super(models.user);
    }
}

module.exports = userService;
