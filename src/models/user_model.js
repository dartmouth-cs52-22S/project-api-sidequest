// From lab/sa7 -------DO WE NEED TO CHANGE SHIT

import mongoose, { Schema } from 'mongoose';

import bcrypt from 'bcryptjs/dist/bcrypt';

const userSchema = new Schema(
  {
    authName: { type: String },
    email: { type: String, unique: true, lowercase: true },
    password: { type: String },
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    timestamps: true,
  },
);
userSchema.pre('save', async function beforeyYourModelSave(next) {
  // this is a reference to our model
  // the function runs in some other context so DO NOT bind it
  const user = this;

  if (!user.isModified('password')) return next();

  // TODO: do stuff here

  // when done run the **next** callback with no arguments
  // call next with an error if you encounter one
  // return next();

  try {
    // salt, hash, then set password to hash
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    return next();
  } catch (error) {
    return next(error);
  }
});
// note use of named function rather than arrow notation, required here
userSchema.methods.comparePassword = async function comparePassword(candidatePassword) {
  const comparison = await bcrypt.compare(candidatePassword, this.password);
  return comparison;
};
const UserModel = mongoose.model('User', userSchema);

export default UserModel;
