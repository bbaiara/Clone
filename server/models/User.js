/*  models/User.js

here this model is combined for both:
    - users who regisreted manually
    - users who signed up with google
    - thus, unique identifier for each user will be email.

*/

const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: false,
  },
  studentId: {
    type: String,
    required: false, //optional
  },
  department: {
    type: String,
    required: false, //optional
  },
  googleId: {
    type: String,
    required: false, //optional
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
