import jwt from 'jwt-simple';
import dotenv from 'dotenv';
import User from '../models/user_model';

dotenv.config({ silent: true });

// Returns all users
export async function getUsers() {
  try {
    const allUsers = await User.find({}).sort([['date', -1]]);
    return allUsers;
  } catch (error) {
    throw new Error(`Get users error: ${error}`);
  }
}
// delete user by id
export async function deleteUser(id) {
  try {
    const user = await User.findByIdAndDelete(id);
    return user;
  } catch (error) {
    throw new Error(`Delete user error: ${error}`);
  }
}

// Return the user given their id
export async function getUser(id) {
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    throw new Error(`Get user error: ${error}`);
  }
}

/// HOW TO UPDATE MORE THEAN ONE FIELDDDD BRUHHHH
// ^LIKE WHAT WILL updateFields LOOK LIKE. NEED TO KNOW BEFORE I DO THIS
export async function updateUser(id, updateFields) {
  try {
    const user = await User.findById(id);

    return user;
  } catch (error) {
    throw new Error(`Get posts error: ${error}`);
  }
}

export const signin = (user) => {
  // WHAT DO WE DO HERERERERERERERERERERE ************************
};

export const signup = async ({
  email, password, name, userName, profileUrl,
}) => {
  if (!email || !password) {
    throw new Error('You must provide email and password');
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('Email is in use');
  }

  const user = new User();
  user.email = email;
  user.name = name;
  user.password = password;
  user.userName = userName;
  user.streak = 10;
  user.profileUrl = 'https://as2.ftcdn.net/v2/jpg/01/15/85/23/1000_F_115852367_E6iIYA8OxHDmRhjw7kOq4uYe4t440f14.jpg';
  user.stats.wisdom = 5;
  user.stats.strength = 15;
  user.stats.charisma = 7;
  user.stats.magic = 4;
  user.stats.health = 8;

  await user.save();
  return tokenForUser(user);
};

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.AUTH_SECRET);
}
