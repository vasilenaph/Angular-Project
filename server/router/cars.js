const express = require('express');
const router = express.Router();
const { auth } = require('../utils/auth');
const { carController } = require('../controllers');

// middleware that is specific to this router

router.get('/', carController.getCars);

router.get('/:carId', carController.getCar);

module.exports = router