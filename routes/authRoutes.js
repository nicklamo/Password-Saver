const express = require('express');
const router = express.Router();


// ==========
// auth routes
// ==========

//show register form
router.get('/register', (req,res) => {
    res.render('register');
});
//register a user
router.post('/register', (req,res) => {
    res.send('register route');
});

//show login form
router.get('/login', (req,res) =>{
    res.render('login')
});
//login a user
router.post('/login', (req,res) =>{
    res.send('login route')
});

module.exports = router;