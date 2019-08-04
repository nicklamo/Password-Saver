const mongoose = require('mongoose');

//schema setup
const passwordSchema = new mongoose.Schema({
  password: String,
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    email: String
  }
});

module.exports = mongoose.model("Password", passwordSchema);