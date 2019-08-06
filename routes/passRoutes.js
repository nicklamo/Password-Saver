const express = require('express');
const router = express.Router();
const middleware = require('../middleware');
const Password = require('../models/passwords');
const User = require('../models/user');
// ================
// Password Routes
// ================

//show passwords
router.get('/passwords', middleware.checkAuthenticated, (req, res) => {
    res.render('passwords', { currentUser: req.user });
});

//show new password form
router.get('/passwords/new', middleware.checkAuthenticated, (req, res) => {
    res.render('new', { currentUser: req.user });
});

//create new password post route
router.post('/passwords', middleware.checkAuthenticated, async (req, res) => {
    try {
        const password = req.body.password;
        const passwordFor = req.body.for;
        const newPassword = { for: passwordFor, password: password }
        await Password.create(newPassword);
        //put new password in database users password array
        const currentUser = req.user;
        currentUser.passwords.push(newPassword);
        currentUser.save();
        //redirect to passwords page
        res.redirect('/passwords');
    } catch (e) {
        console.log(e.message);
        res.redirect('/passwords/new');
    }
});

//password update form
router.get('/passwords/:password_id/edit', middleware.checkAuthenticated, (req, res) => {
    try {
        const user = req.user;
        const password = user.passwords.find((password) => password._id = req.params.password_id);
        res.render('edit', { password: password });
    }
    catch (e) {
        console.log(e.message);
    }
});

//password update put route
router.put('/passwords/:password_id', middleware.checkAuthenticated, async (req, res) => {
    try {
        //get user info
        const user = req.user;
        //find old password index and delete
        const deleteIndex = user.passwords.findIndex((password) => password._id = req.params.password_id);
        user.passwords.splice(deleteIndex, 1);
        //make updated password
        const pass = req.body.password;
        const passwordFor = req.body.for;
        const updated = { _id: req.params.password_id, for: passwordFor, password: pass };
        //update and save
        user.passwords.push(updated);
        user.save();
        res.redirect('/passwords');
    } catch (e) {
        console.log(e.message);
    }

});

//password delete route
router.delete('/passwords/:password_id', middleware.checkAuthenticated, (req, res) => {
    try {
        //get user info
        const user = req.user;
        //find old password index and delete
        const deleteIndex = user.passwords.findIndex((password) => password._id = req.params.password_id);
        user.passwords.splice(deleteIndex, 1);
        user.save();
        res.redirect('/passwords');
    } catch (e) {
        console.log(e.message);
    }
});

module.exports = router;