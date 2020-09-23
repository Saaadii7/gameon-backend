const Joi = require('@hapi/joi');

module.exports = Joi.object({
    address: Joi.string(),
    
    approved: Joi.boolean(),
    
    banned: Joi.boolean(),
    
    city: Joi.string(),
    
    country: Joi.string(),
    
    dob: Joi.date().max(new Date()),
    
    email: Joi.string().email({
        minDomainSegments: 2,
        tlds: {
            allow: ['com', 'net'] 
        }
    }),
    
    first: Joi.string()
        .alphanum()
        .min(2)
        .max(225),
    // .required(),
    gender: Joi.string(),
    last: Joi.string(),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/),
    phone: Joi.string()
        .min(11)
        .max(11),
    postalCode: Joi.number()
        .integer()
        .min(999)
        .max(999999),
    province: Joi.string(),
    rating: Joi.number()
        .integer()
        .min(0)
        .max(5),
    timezone: Joi.string()
});
