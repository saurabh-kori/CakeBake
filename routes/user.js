const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');
// console.log('router loaded');
router.get('/signup',userController.signup);
router.get('/profile',userController.profile);
router.get('/logout',userController.logout);

module.exports = router;