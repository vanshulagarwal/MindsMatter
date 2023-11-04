const User = require('../models/user');
const bcrypt = require('bcrypt');

module.exports.registerUser = async (req, res, next) => {
    const { username, password, email, firstname, lastname } = req.body;
    const oldUser = await User.findOne({ username: username });

    if (oldUser) {
        req.flash('error', 'username you provided is already in use');
        return res.redirect('/login');
    }

    const hash = await bcrypt.hash(password, 12);
    const newUser = new User({
        username: username,
        password: hash,
        email: email,
        firstname: firstname,
        lastname: lastname
    });
    await newUser.save();

    req.session.user_id = newUser._id;
    req.flash('success', `Registered Successfully ${newUser.firstname}`);
    res.redirect('/');
}

module.exports.renderLogin = (req, res, next) => {
    res.render('login');
}

module.exports.loginUser = async (req, res, next) => {
    const { username, password } = req.body;

    const foundUser = await User.findAndValidate(username, password);
    if (foundUser) {
        req.session.user_id = foundUser._id;
        req.flash('success', `Welcome ${foundUser.username}`);
        res.redirect('/');
    }
    else {
        req.flash('error', 'Invalid Username or Password');
        return res.redirect('/login');
    }
}

module.exports.logoutUser = (req, res, next) => {
    req.session.user_id = null;
    req.flash('success', 'Successfully Logged Out');
    res.redirect('/');
}