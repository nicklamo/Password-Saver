const express = require('express');
const router = express.Router();
const User = require('../models/user')
const passport = require('passport');
const middleware = require('../middleware');

// ====================
// registration routes
// ====================

//show register form
router.get('/register', middleware.checkNotAutheniticated ,(req,res) => {
    res.render('register',{currentUser: req.user});
});
//register a user
router.post('/register', middleware.checkNotAutheniticated ,async (req,res) => {
    try{ //dont register if the password is not equal
        if(req.body.password !== req.body.password_conf){
            res.redirect('/register');
        }
        //store user in database
        const newUser = await new User({username: req.body.email});
        const registered = await User.register(newUser, req.body.password);
        passport.authenticate('local');
        res.redirect('/login');
    } catch(e){
        console.log(e.message);
        res.redirect('/register');
    }
});

// =============
// Login/out routes
// =============

//show login form
router.get('/login', middleware.checkNotAutheniticated ,(req,res) =>{
    res.render('login', {currentUser: req.user})
});
//login a user
router.post('/login',passport.authenticate('local', {
    successRedirect: '/passwords',
    failureRedirect: '/',
    failureFlash: true
}));

//logout a user
router.delete('/logout', (req,res) => {
    req.logOut();
    res.redirect('/login');
});



module.exports = router;