//import express
const express = require("express");

//create new router object
const router = express.Router();

//import userSchema 
const User = require("../models/userSchema");


//import function CRUD from file userControllers.js
const {
  getUser,
  addUser,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers");

//methode get
router.get("/", getUser)

//methode post
router.post("/post",addUser)

//methode put
router.put("/put/:id", updateUser)

//methode delete
router.delete("/delete/:id", deleteUser)

//export router
module.exports = router;
