const express = require('express');
const router = express.Router();
const middleware = require('../middleware');

// ================
// Password Routes
// ================

//show passwords
router.get('/passwords', middleware.checkAuthenticated,(req,res) => {
    res.render('passwords', {currentUser: req.user});
});

//show new password form
router.get('/passwords/new',middleware.checkAuthenticated,(req,res) => {
    res.render('new', {currentUser: req.user});
});

//new password post route
router.post('/passwords', middleware.checkAuthenticated,(req,res) => {
    res.send('create a new password route');
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