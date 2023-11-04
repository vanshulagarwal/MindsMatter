const express = require('express');
const router = express.Router();
const { registerUser, renderLogin, loginUser, logoutUser } = require('../controllers/users');

router.post('/register',registerUser)

router.route('/login')
    .get(renderLogin)
    .post(loginUser)

router.get('/logout', logoutUser)

module.exports = router;