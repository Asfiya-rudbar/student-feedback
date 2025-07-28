const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  username: String,
  password: String // store as hashed
});

module.exports = mongoose.model('Admin', adminSchema);
