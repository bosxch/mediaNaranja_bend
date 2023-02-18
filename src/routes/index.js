const { Router } = require('express');
const router = Router();
const user = require('./user');
const tickets = require('./tickets');
const store = require('./store');
const admin = require('./admin');

router.use('/user', user);
router.use('/tickets', tickets);
router.use('/store', store);
router.use('/admin', admin);

module.exports = router;