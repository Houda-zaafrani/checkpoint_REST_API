//import userSchema
const User = require("../models/userSchema")
//function getUser = methode get
const  getUser = async(req,res)=> {
  try {
    const user = await User.find();
    res.status(200).json({ msg: "find all data", user });
  } catch (err) {
    res.status(500).json({ msg: err.Message });
  }
}
 //function addUser = methode post
  const addUser = async(req,res) =>{
try {
  const newUser = await new User(req.body)
  await newUser.save()
  res.status(201).json({msg : "user added with success", newUser})
  
} catch (err) {res.status(500).json({msg : err.message})
  
}
  }
 //function updateUser = methode put(update)
  const updateUser = async(req,res) =>{
try {
  const user = await User.findByIdAndUpdate({_id :req.params.id}, {...req.body})
  if(!user) return res.status(404).json({msg : "user not found", user})
  res.status(200).json({msg : `user with id : ${req.params.id} updated with success`,user :{...user._doc, ...req.body}})
} catch (err) {msg : err.message}
  }
//function deleteUser = methode delete
const deleteUser =async(req,res) =>{
const user = await User.findByIdAndDelete(req.params.id)
if(!user) return res.status(404).json({msg : "user not found"})
res.status(200).json({msg :`user with  id :${req.params.id} deleted with success`, user})
  }

  //export all precedent functions
module.exports = { getUser, addUser, updateUser, deleteUser };
