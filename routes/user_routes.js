const express = require('express');
const userController = require('../controllers/user_controller');
const User = require('../models/User');
const router = express.Router();

// Create User
router.post('/', userController.createUser);

//Get User Information
router.get('/self/', userController.getUser);

// Update User Information
router.put('/self/', userController.updateUser);

module.exports = router;