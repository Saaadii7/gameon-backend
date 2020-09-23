const Joi = require('@hapi/joi');

module.exports = Joi.object({
    approved: Joi.boolean(),
    description: Joi.string(),
    extraCount: Joi.number(),
    extras: Joi.boolean(),
    name: Joi.string(),
    playerCount: Joi.number()
});
