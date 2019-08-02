const express = require('express');
const router = express.Router();

// ================
// Password Routes
// ================

//show passwords
router.get('/passwords', (req,res) => {
    res.render('passwords');
});

//show new password form
router.get('/passwords/new',(req,res) => {
    res.render('new');
});

//new password post route
router.post('/passwords', (req,res) => {
    res.send('create a new password route');
});

//password update from route
router.put('/passwords/:password_id/edit', (req,res) => {

});

//password update put route
router.put('/passwords/:password_id', (req,res) => {
    res.send('update password route')
});

//password delete route
router.delete('/passwords/:password_id', (req,res)=> {
    res.send('delete route route');
});

module.exports = router;