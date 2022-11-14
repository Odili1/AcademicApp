const express = require('express');
const router = express.Router();
const {check} = require('express-validator');

// import the router controller
const usersController = require('../controllers/usersController');
const auth = require('../middleware/auth');


// Login user route
router.post('/api/auth/login', 
    [
        check("email", "Please enter a valid email").isEmail(),
        check("password", "A valid password is required").exists()
    ],
    usersController.loginUser
);

// Get logged in user
router.get("/api/auth", auth, usersController.getLoggedInUser);

module.exports = router;
