const express = require('express');
const router = express.Router();
const httpStatus = require('http-status');

router.get('/', async (req, res) => {
    return res.status(httpStatus.OK).json('🤘 Welcome to GAMEON-Mobile-API. 🤘');
});

module.exports = router;
