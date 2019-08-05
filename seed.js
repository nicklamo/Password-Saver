var mongoose = require("mongoose");
var User = require("./models/user");
var Password   = require("./models/passwords");

async function seedDB(){
    try{
        //Remove all 
        await User.remove({});
        console.log("removed users!");
        await Password.remove({});
        console.log("removed passwords!");

    }
    catch(e){
        console.log(e.message);
    }
}

module.exports = seedDB;