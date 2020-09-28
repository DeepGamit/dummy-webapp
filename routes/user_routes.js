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

<<<<<<< HEAD
//Mock Function
router.get('/authorizeTest', userController.authorizeTest);
router.post('/createTest', userController.creationTest)

=======
>>>>>>> ae29f6eebcb538748d0d2ffd1f3a3dda6c6e736b
module.exports = router;