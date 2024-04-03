const router = require('express').Router();
const users = require('./users');
const topics = require('../router/topics');
const cars = require('../router/cars');
const { authController } = require('../controllers');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

router.use('/users', users);
router.use('/cars', cars);
router.use('/topics', topics);

module.exports = router;
