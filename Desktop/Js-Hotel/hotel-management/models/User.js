const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: { 
    type: String,
     required: true
     },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true,
    unique: true 
  },
  role: {
    type: String,
    enum: ['Admin', 'Staff', 'Customer'],  
    required: false,
    default: 'Customer'
  },
  resetPasswordToken: { type: String }, 
  resetPasswordExpires: { type: Date }   
});

const User = mongoose.model('User', userSchema);

module.exports = User;
