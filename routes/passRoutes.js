const express = require('express');
const router = express.Router();
const middleware = require('../middleware');
const Password = require('../models/passwords');
const User = require('../models/user');
// ================
// Password Routes
// ================

//show passwords
router.get('/passwords', middleware.checkAuthenticated,(req,res) => {
    const passwords = Password.find({id:req.user._id})
    console.log(passwords);
    res.render('passwords', {currentUser: req.user, passwords:passwords});
});

//show new password form
router.get('/passwords/new', middleware.checkAuthenticated,(req,res) => {
    res.render('new', {currentUser: req.user});
});

//create new password post route
router.post('/passwords', middleware.checkAuthenticated, async (req,res) => {
    try {
        //format new password
        const author = {
            id: req.user._id,
            username: req.user.username
        };
        const password = req.body.password;
        const passwordFor = req.body.for;
        const newPassword = {for: passwordFor, password:password, author: author}
        console.log(newPassword)
        //put new password in database users password array
        await Password.create(newPassword);
        //redirect to passwords page
        res.redirect('/passwords');
    } catch(e) {
        console.log(e.message);
        res.redirect('/passwords/new');
    }
});

//password update from route
router.put('/passwords/:password_id/edit', middleware.checkAuthenticated,(req,res) => {

});

//password update put route
router.put('/passwords/:password_id', middleware.checkAuthenticated,(req,res) => {
    res.send('update password route')
});

//password delete route
router.delete('/passwords/:password_id', middleware.checkAuthenticated, (req,res)=> {
    res.send('delete route route');
});

module.exports = router;