import User from "../model/user.js";
import mongoose from "mongoose";
export const getUsers = async (req, res) => {

  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.send('Error ' + err);
  }
};

export const createUser = async (req, res) => {
  const user = new User({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    phone: req.body.phone
  });

  try {
    const a1 = await user.save();
    res.send(`user with username ${user.username} added`);
  } catch (err) {
    res.send('Error ' + err);
  }
};

export const getUser = async (req, res) => {
  const { username } = req.params;
  try {
    const user = await User.find({username: username }); // 1st username -> database,,,,,,,, 2nd params
    res.send(user);
  } catch (err) {
    res.send('Error ' + err);
  }
};

export const updateUser = async (req, res) => {
  const { username } = req.params;

  const {name, phone, password } = req.body;
  try {
    const user = await User.find({ username: username});
    if (name != null) {
      await User.updateOne({ username: username}, {name: name});
    }
    if (phone != null) {
      await User.updateOne({ username: username }, {phone: phone });
    }
    if (password != null) {
      await User.updateOne({ username: username }, { password: password });
    }
    res.send(`user with ${username} has been updated.`);
  } catch (err) {
    res.send('Error' + err);
  }
};

export const deleteuser = async (req, res) => {
  let { username } = req.params;
  // try {
  //   const a1 = await User.remove({username: username});
  //   res.send(`User with username ${ username} removed from database` );
  // } catch (e) {
  //   res.send("Error " + e);
  // }
  try {
   await User.deleteOne( { "username" : username } );
    res.send(`User with username ${ username} removed from database` );
  } catch (e) {
   console.log("Error " + e);
  }
};
