const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bcrypt = require('bcrypt');
const User = require('./models/user');
const session = require('express-session');
const flash = require('connect-flash');
const userRoutes = require('./routes/users');


const app = express();

const dbUrl = 'mongodb://127.0.0.1:27017/mindsmatter';
mongoose.connect(dbUrl)
    .then(() => {
        console.log('mongo database connected');
    })
    .catch((err) => {
        console.log('mongo connection error!!');
        console.log(err);
    })

const sessionConfig = {
    secret: 'thisshouldbeabettersecret!',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        //auto deletes after 7 days
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}
app.use(session(sessionConfig));
app.use(flash());

app.use((req, res, next) => {
    res.locals.user_id=req.session.user_id;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res, next) => {
    res.render('home');
})

app.use('/', userRoutes);

const handleValidationErr = err => {
    console.log(err);
    return new Error(`Validation Failed... ${err.message}`);
}

app.use((err, req, res, next) => {
    console.log(err.name);
    if (err.name === 'ValidationError') {
        err = handleValidationErr(err);
    }
    next(err);
})

app.use((err, req, res, next) => {
    const { status = 500 } = err;
    if (!err.message) err.message = 'Oh no! Something went Wrong!';
    console.log("****error****", err);
    res.status(status).render('error', { err });
    next(err);
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})