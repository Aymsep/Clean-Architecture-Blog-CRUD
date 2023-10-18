const mongoose = require('mongoose');
const {generateSaltAndHash} = require('../Utils/Hashing')

const userSchema = new mongoose.Schema({
  username: {
    unique:false,
    type: String,
  },
  age: {
    unique:false,
    type: Number,
  },
  salary: {
    unique:false,
    type: Number,
  },
  email: {
    type: String,
    unique:false
  },
  password:{
    type: String,
  },
  active:{
    type: Number,
    default:false
  },
  image: {
    unique:false,
    type: String,
  },
},{timestamps:true,versionKey:false});


// Middleware

userSchema.pre('findOneAndUpdate', async function(next) {
  const update = this.getUpdate();
  const user = await this.model.findOne(this.getQuery());
  if (update.password && update.password !== user.password) {
    try {
      console.log('Password modified');
      const hashedPassword = await generateSaltAndHash(update.password);
      update.password = hashedPassword; 
    } catch (error) {
      return next(error);
    }
  } else {
    console.log('Password not modified');
  }

  return next();

});



// Create and export the User model
module.exports = mongoose.model('Employers', userSchema);
