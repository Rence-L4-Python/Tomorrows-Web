const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const User = require('./models/user');
const auth = require('./middleware/auth');
require('dotenv').config();
require('./passport-config');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Landing page route
//app.use('/', express.static(path.join(__dirname, 'public/landing')));

// Code reference from Bart Read, https://stackoverflow.com/questions/16534545/how-to-get-rid-of-html-extension-when-serving-webpages-with-node-js
app.use(express.static(path.join(__dirname, 'public'), {
extensions: ['html', 'htm'] 
}));
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/flowtimer', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
const users = require('./routes/users');
app.use('/users', users);

// Google OAuth routes
app.get('/auth/google',
    passport.authenticate('google', {scope: ['profile', 'email']})
);

app.get('/auth/google/callback',
    passport.authenticate('google', {failureRedirect: '/login.html'}),
    (req, res) => {
        res.redirect('/');
    }
);

app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

// Admin routes
app.use('/admin', auth, express.static(path.join(__dirname, 'public/admin')));

// Login route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email, password });
        if (user) {
            // res.json({ message: 'Login successful' });
            return res.json({success:true});
        } else {
            res.status(401).json({ error: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});