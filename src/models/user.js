const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name:{ 
    type: String,
    required: false
  },
  nickname:{
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  password:{
    type: String,
    required: true,
    select:false
  },
  urlImage:{
    type: String,
    required: false
  },
  phone:{
    type: String,
    required: false
  },
  address:{
    type: String,
    required: false
  },
})

mongoose.model('User', UserSchema);
