const express = require('express');
const router = express.Router();
const httpStatus = require('http-status');
const auth = require('../../utils/authGuard');

router.get('/', async (req, res) => {
    return res.status(httpStatus.OK).json('🤘 Welcome to GAMEON-Web-API. 🤘');
});

router.use('/auth', require('./auth'));
router.use('/users', auth.required, require('./users'));
router.use('/sports', auth.required, require('./sports'));

module.exports = router;
