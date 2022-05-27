// From lab/sa7 -------DO WE NEED TO CHANGE SHIT
import jwt from 'jwt-simple';
import dotenv from 'dotenv';
import User from '../models/user_model';

dotenv.config({ silent: true });

// Returns all users
export async function getUsers() {
  try {
    const allUsers = await User.find({}).sort([['date', -1]]);
    console.log(allUsers, 'HIHIIHIHHHI');
    return allUsers;
  } catch (error) {
    throw new Error(`Get posts error: ${error}`);
  }
}

// Return the user given their id
export async function getUser(id) {
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    throw new Error(`Get posts error: ${error}`);
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
  email, password, name, userName,
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
  await user.save();
  return tokenForUser(user);
};

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.AUTH_SECRET);
}
