const express = require('express');
const router = express.Router();
const httpStatus = require('http-status');
const errorHandler = require('../utils/errorHandler');

// const io = req.app.get('io');
// io.emit('----',{})

router.get('/', async (req, res) => {
    return res.status(httpStatus.OK).json('🤘 Hello SaaaDiiI 🤘 Welcome to GAMEON.');
});

router.get('/health', async (req, res) => {
    return res.sendStatus(httpStatus.OK);
});

router.use('/public', require('./public'));
router.use('/api', require('./web'));
router.use('/mobile', require('./mobile'));

router.use([ '*' ], async (req, res, next) => {
    next(new Error(`Requested Route not found ${req.baseUrl}`));
});

// eslint-disable-next-line no-unused-vars
router.use(errorHandler);

module.exports = router;
