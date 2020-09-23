const express = require('express');
const router = express.Router();
const sports = require('../../controllers/sports');

router.get('/', sports.all);
router.post('/', sports.create);
router.get('/:id', sports.get);

module.exports = router;
