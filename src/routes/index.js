const { Router } = require('express');
const router = Router();
const user = require('./user');
const tickets = require('./tickets');

router.use('/user', user);
router.use('/tickets', tickets);
router.use('/store', store)

module.exports = router;