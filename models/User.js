const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  type:{
    type: String,
    required: true
  }, 
  courses:{
    type: [[String]]
  }
});

mongoose.model('users', UserSchema);