const mongoose = require('mongoose');

//schema setup
const passwordSchema = new mongoose.Schema({
  password: String,
  for: String,
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    username: String
  }
});

module.exports = mongoose.model("Password", passwordSchema);