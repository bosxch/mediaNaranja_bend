const { Router } = require('express');
const router = Router();
const user = require('./user');
const tickets = require('./tickets');
const store = require('./store')

router.use('/user', user);
router.use('/tickets', tickets);
router.use('/store', store)

module.exports = router;